import { z } from "zod";

const enterGiveawaySchema = z.object({
  giveawayId: z.cuid(),
  firstName: z.string().trim().min(1).max(120),
  email: z.email().max(255),
});

export { enterGiveawaySchema };
