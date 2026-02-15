import { z } from "zod";

const createGiveawaySchema = z.object({
  title: z.string().trim().min(3).max(160),
  description: z.string().trim().max(4000).optional().or(z.literal("")),
});

const updateGiveawayStatusSchema = z.object({
  id: z.cuid(),
  isActive: z.boolean(),
});

const deleteGiveawaySchema = z.object({
  id: z.cuid(),
});

const pickWinnerSchema = z.object({
  giveawayId: z.cuid(),
});

export { createGiveawaySchema, deleteGiveawaySchema, pickWinnerSchema, updateGiveawayStatusSchema };
