import { scheduleWeeklyBroadcastSchema } from "../dtos/EmailBroadcastDto";
import { createWeeklySchedule } from "../repositories/EmailBroadcastRepository";
import { getNextWeeklyRunAt, weekdayToIndex } from "../services/ScheduleTimeService";

type ScheduleWeeklyBroadcastInput = {
  subject: string;
  bodyText: string;
  weekday: "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY";
  time: string;
  timezone: "America/New_York";
  adminId: string;
  pdfUrl?: string;
  pdfName?: string;
  subscriberIds?: string[];
};

async function execute(input: ScheduleWeeklyBroadcastInput) {
  try {
    const parsed = scheduleWeeklyBroadcastSchema.parse({
      subject: input.subject,
      bodyText: input.bodyText,
      weekday: input.weekday,
      time: input.time,
      timezone: input.timezone,
    });

    const nextRunAt = getNextWeeklyRunAt({
      weekday: parsed.weekday,
      time: parsed.time,
      timezone: parsed.timezone,
      from: new Date(),
    });

    const scheduled = await createWeeklySchedule({
      subject: parsed.subject,
      bodyText: parsed.bodyText,
      adminId: input.adminId,
      timezone: parsed.timezone,
      weeklyDayOfWeek: weekdayToIndex[parsed.weekday],
      weeklyTime: parsed.time,
      nextRunAt,
      pdfUrl: input.pdfUrl,
      pdfName: input.pdfName,
      subscriberIds: input.subscriberIds,
    });

    return { success: true, data: scheduled };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to schedule weekly broadcast.";
    return { success: false, error: message, details: error };
  }
}

export { execute };
