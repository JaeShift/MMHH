import { z } from "zod";

const subscribeNewsletterSchema = z.object({
  firstName: z.string().trim().min(1).max(120).optional().or(z.literal("")),
  email: z.email().max(255),
  source: z.string().trim().min(1).max(120).optional(),
});

const deleteSubscriberSchema = z.object({
  id: z.cuid(),
});

export { deleteSubscriberSchema, subscribeNewsletterSchema };
