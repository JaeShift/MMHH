"use server";

import nodemailer from "nodemailer";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { deleteSubscriberSchema, subscribeNewsletterSchema } from "../dtos/NewsletterSubscriberDto";
import { count, deleteById, findAll, updateById } from "../repositories/NewsletterSubscriberRepository";
import { execute as subscribeUseCase } from "../use-cases/SubscribeToNewsletter";

async function sendWelcomeEmail(email: string, firstName?: string) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM } = process.env as Record<string, string | undefined>;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const safeName = firstName?.trim() || "there";
  const from = MAIL_FROM || `Modern MHH <${SMTP_USER}>`;
  const subject = "Welcome to the Weekly Wellness Newsletter";
  const html = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#FCF8F0;padding:24px 0;font-family:Inter,Arial,sans-serif;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#fff;border:1px solid #E2D9CD;border-radius:14px;">
            <tr><td style="padding:28px 30px 8px;"><div style="height:4px;width:72px;background:#75866D;border-radius:999px;"></div></td></tr>
            <tr><td style="padding:8px 30px 16px;"><h1 style="font-family:Georgia,serif;font-size:28px;line-height:1.2;margin:0;color:#392E26;">Welcome, ${safeName}</h1></td></tr>
            <tr><td style="padding:0 30px 24px;color:#392E26;font-size:16px;line-height:1.6;">
              Thanks for subscribing. You will receive one practical women’s wellness newsletter each week focused on mood, hormones, stress, and sleep.
            </td></tr>
            <tr><td style="padding:0 30px 30px;color:#6B5B4D;font-size:13px;">Educational content only. Unsubscribe anytime.</td></tr>
          </table>
        </td>
      </tr>
    </table>
  `;

  await transporter.sendMail({ to: email, from, subject, html });
}

async function subscribeAction(input: { firstName?: string; email: string; source?: string }) {
  try {
    const parsed = subscribeNewsletterSchema.parse(input);
    const result = await subscribeUseCase(parsed);

    if (!result.success || !result.data) {
      return { success: false, data: null, error: "Unable to subscribe." };
    }

    await sendWelcomeEmail(result.data.email, result.data.firstName || undefined);
    revalidatePath("/admin/subscribers");
    return { success: true, data: result.data };
  } catch {
    return { success: false, data: null, error: "Invalid newsletter signup input." };
  }
}

async function getSubscribersAction() {
  const session = await auth();
  if (!session?.user) {
    return { success: false, data: { subscribers: [], total: 0 }, error: "Unauthorized" };
  }

  const subscribers = await findAll();
  const total = await count();
  return { success: true, data: { subscribers, total } };
}

async function deleteSubscriberAction(input: { id: string }) {
  const session = await auth();
  if (!session?.user) {
    return { success: false, data: null, error: "Unauthorized" };
  }

  try {
    const parsed = deleteSubscriberSchema.parse(input);
    const deleted = await deleteById(parsed.id);
    revalidatePath("/admin/subscribers");
    return { success: true, data: deleted };
  } catch {
    return { success: false, data: null, error: "Unable to delete subscriber." };
  }
}

async function updateSubscriberAction(input: { id: string; firstName?: string; email: string; source?: string }) {
  const session = await auth();
  if (!session?.user) {
    return { success: false, data: null, error: "Unauthorized" };
  }

  try {
    const updated = await updateById(input.id, {
      firstName: input.firstName,
      email: input.email,
      source: input.source,
    });
    revalidatePath("/admin/subscribers");
    return { success: true, data: updated };
  } catch {
    return { success: false, data: null, error: "Unable to update subscriber." };
  }
}

export { deleteSubscriberAction, getSubscribersAction, subscribeAction, updateSubscriberAction };
