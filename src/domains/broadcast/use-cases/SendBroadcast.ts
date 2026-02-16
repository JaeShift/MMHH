import { findAll } from "@/domains/newsletter/repositories/NewsletterSubscriberRepository";
import { sendBroadcastSchema } from "../dtos/EmailBroadcastDto";
import { create } from "../repositories/EmailBroadcastRepository";
import { buildEmailTemplate } from "../services/EmailTemplateService";
import { sendToMany } from "../services/SmtpEmailService";

type SendBroadcastInput = {
  subject: string;
  bodyText: string;
  adminId: string;
  pdfUrl?: string;
  pdfName?: string;
};

async function execute(input: SendBroadcastInput) {
  try {
    const parsed = sendBroadcastSchema.parse({
      subject: input.subject,
      bodyText: input.bodyText,
    });

    const subscribers = await findAll();
    const emails = subscribers.map((subscriber) => subscriber.email);
    if (!emails.length) {
      return { success: false, error: "No subscribers found." };
    }

    const html = buildEmailTemplate({
      subject: parsed.subject,
      bodyText: parsed.bodyText,
    });

    await sendToMany(emails, parsed.subject, html, input.pdfUrl, input.pdfName);

    const broadcast = await create({
      adminId: input.adminId,
      subject: parsed.subject,
      bodyText: parsed.bodyText,
      recipientCount: emails.length,
      pdfUrl: input.pdfUrl,
      pdfName: input.pdfName,
    });

    return { success: true, data: broadcast };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to send broadcast.";
    return { success: false, error: message, details: error };
  }
}

export { execute };
