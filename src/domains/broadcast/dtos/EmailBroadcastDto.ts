import { z } from "zod";

const sendBroadcastSchema = z.object({
  subject: z.string().trim().min(3).max(180),
  bodyText: z.string().trim().min(10).max(10000),
});

const scheduleWeeklyBroadcastSchema = z.object({
  subject: z.string().trim().min(3).max(180),
  bodyText: z.string().trim().min(10).max(10000),
  weekday: z.enum(["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]),
  time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Time must be HH:MM in 24-hour format."),
  timezone: z.literal("America/New_York"),
});

const deleteBroadcastSchema = z.object({
  id: z.cuid(),
});

const sendWinnerEmailSchema = z.object({
  email: z.email().max(255),
  firstName: z.string().trim().min(1).max(120),
  subject: z.string().trim().min(3).max(180),
  bodyText: z.string().trim().min(10).max(10000),
});

export { deleteBroadcastSchema, scheduleWeeklyBroadcastSchema, sendBroadcastSchema, sendWinnerEmailSchema };
