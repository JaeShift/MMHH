import { sendWinnerEmailSchema } from "@/domains/broadcast/dtos/EmailBroadcastDto";
import { buildEmailTemplate } from "@/domains/broadcast/services/EmailTemplateService";
import { sendToOne } from "@/domains/broadcast/services/SmtpEmailService";

async function execute(input: { email: string; firstName: string; subject: string; bodyText: string }) {
  try {
    const parsed = sendWinnerEmailSchema.parse(input);
    const html = buildEmailTemplate({
      subject: parsed.subject,
      bodyText: parsed.bodyText,
      recipientName: parsed.firstName,
    });

    await sendToOne(parsed.email, parsed.subject, html);
    return { success: true, data: { email: parsed.email } };
  } catch (error) {
    return { success: false, error: "Unable to send winner email.", details: error };
  }
}

export { execute };
