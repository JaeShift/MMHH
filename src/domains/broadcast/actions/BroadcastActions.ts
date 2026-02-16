"use server";

import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { deleteBroadcastSchema, sendWinnerEmailSchema } from "../dtos/EmailBroadcastDto";
import { deleteById, findAll } from "../repositories/EmailBroadcastRepository";
import { buildEmailTemplate } from "../services/EmailTemplateService";
import { sendToOne } from "../services/SmtpEmailService";
import { execute as scheduleWeeklyBroadcastUseCase } from "../use-cases/ScheduleWeeklyBroadcast";
import { execute as sendBroadcastUseCase } from "../use-cases/SendBroadcast";

async function sendBroadcastAction(input: { subject: string; bodyText: string; pdfUrl?: string; pdfName?: string }) {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, data: null, error: "Unauthorized" };
  }

  const result = await sendBroadcastUseCase({
    subject: input.subject,
    bodyText: input.bodyText,
    pdfUrl: input.pdfUrl,
    pdfName: input.pdfName,
    adminId: session.user.id,
  });

  if (!result.success) {
    return { success: false, data: null, error: result.error };
  }

  revalidatePath("/admin/broadcasts");
  return { success: true, data: result.data };
}

async function scheduleWeeklyBroadcastAction(input: {
  subject: string;
  bodyText: string;
  weekday: "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY";
  time: string;
  timezone: "America/New_York";
  pdfUrl?: string;
  pdfName?: string;
}) {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, data: null, error: "Unauthorized" };
  }

  const result = await scheduleWeeklyBroadcastUseCase({
    ...input,
    adminId: session.user.id,
  });
  if (!result.success) {
    return { success: false, data: null, error: result.error };
  }

  revalidatePath("/admin/broadcasts");
  return { success: true, data: result.data };
}

async function getBroadcastsAction() {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, data: [], error: "Unauthorized" };
  }

  const broadcasts = await findAll();
  return { success: true, data: broadcasts };
}

async function deleteBroadcastAction(input: { id: string }) {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, data: null, error: "Unauthorized" };
  }

  try {
    const parsed = deleteBroadcastSchema.parse(input);
    const deleted = await deleteById(parsed.id);
    revalidatePath("/admin/broadcasts");
    return { success: true, data: deleted };
  } catch {
    return { success: false, data: null, error: "Unable to delete broadcast." };
  }
}

async function sendDirectEmailAction(input: {
  email: string;
  firstName: string;
  subject: string;
  bodyText: string;
}) {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, data: null, error: "Unauthorized" };
  }

  try {
    const parsed = sendWinnerEmailSchema.parse(input);
    const html = buildEmailTemplate({
      subject: parsed.subject,
      bodyText: parsed.bodyText,
      recipientName: parsed.firstName,
    });
    await sendToOne(parsed.email, parsed.subject, html);
    return { success: true, data: { email: parsed.email } };
  } catch {
    return { success: false, data: null, error: "Unable to send email." };
  }
}

export { deleteBroadcastAction, getBroadcastsAction, scheduleWeeklyBroadcastAction, sendBroadcastAction, sendDirectEmailAction };
