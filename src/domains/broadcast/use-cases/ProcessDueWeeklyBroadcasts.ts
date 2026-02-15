import { findAll as findAllSubscribers } from "@/domains/newsletter/repositories/NewsletterSubscriberRepository";
import { findDueWeeklyScheduled, markScheduledRunFailure, markScheduledRunSuccess } from "../repositories/EmailBroadcastRepository";
import { buildEmailTemplate } from "../services/EmailTemplateService";
import { getNextWeeklyRunAt, indexToWeekday } from "../services/ScheduleTimeService";
import { sendToMany } from "../services/SmtpEmailService";

type ProcessDueWeeklyBroadcastsInput = {
  asOf?: Date;
};

async function execute(input?: ProcessDueWeeklyBroadcastsInput) {
  try {
    const asOf = input?.asOf || new Date();
    const dueBroadcasts = await findDueWeeklyScheduled(asOf);
    if (!dueBroadcasts.length) {
      return { success: true, data: { processed: 0, sent: 0, failed: 0 } };
    }

    const subscribers = await findAllSubscribers();
    const emails = subscribers.map((subscriber) => subscriber.email.trim()).filter(Boolean);

    let sent = 0;
    let failed = 0;

    for (const broadcast of dueBroadcasts) {
      const weekday = broadcast.weeklyDayOfWeek;
      const time = broadcast.weeklyTime;
      const timezone = broadcast.timezone || "America/New_York";
      const weekdayLabel = weekday === null ? undefined : indexToWeekday[weekday];
      if (!weekdayLabel || !time) {
        failed += 1;
        await markScheduledRunFailure({
          id: broadcast.id,
          asOf,
          nextRunAt: new Date(asOf.getTime() + 7 * 24 * 60 * 60 * 1000),
          error: "Invalid weekly schedule configuration.",
        });
        continue;
      }

      const nextRunAt = getNextWeeklyRunAt({
        weekday: weekdayLabel,
        time,
        timezone,
        from: new Date(asOf.getTime() + 1000),
      });

      if (!emails.length) {
        failed += 1;
        await markScheduledRunFailure({
          id: broadcast.id,
          asOf,
          nextRunAt,
          error: "No subscribers found.",
        });
        continue;
      }

      const html = buildEmailTemplate({
        subject: broadcast.subject,
        bodyText: broadcast.bodyText,
      });

      try {
        await sendToMany(emails, broadcast.subject, html);
        sent += 1;
        await markScheduledRunSuccess({
          id: broadcast.id,
          asOf,
          nextRunAt,
          recipientCount: emails.length,
        });
      } catch (error) {
        failed += 1;
        const message = error instanceof Error ? error.message : "Failed to send scheduled broadcast.";
        await markScheduledRunFailure({
          id: broadcast.id,
          asOf,
          nextRunAt,
          error: message,
        });
      }
    }

    return {
      success: true,
      data: {
        processed: dueBroadcasts.length,
        sent,
        failed,
      },
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to process scheduled broadcasts.";
    return { success: false, error: message, details: error };
  }
}

export { execute };
