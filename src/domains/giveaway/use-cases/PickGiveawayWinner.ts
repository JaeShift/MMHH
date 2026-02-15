import { pickWinnerSchema } from "../dtos/GiveawayDto";
import { findByGiveawayId } from "../repositories/GiveawayEntryRepository";
import { findById, update } from "../repositories/GiveawayRepository";

async function execute(input: { giveawayId: string }) {
  try {
    const parsed = pickWinnerSchema.parse(input);
    const giveaway = await findById(parsed.giveawayId);
    if (!giveaway) {
      return { success: false, error: "Giveaway not found." };
    }

    if (giveaway.winnerEntryId) {
      return { success: false, error: "Winner already selected." };
    }

    const entries = await findByGiveawayId(parsed.giveawayId);
    if (!entries.length) {
      return { success: false, error: "No entries found for this giveaway." };
    }

    const randomIndex = Math.floor(Math.random() * entries.length);
    const winner = entries[randomIndex];

    const updatedGiveaway = await update(parsed.giveawayId, {
      winnerEntryId: winner.id,
      isActive: false,
    });

    return { success: true, data: { winner, giveaway: updatedGiveaway } };
  } catch (error) {
    return { success: false, error: "Unable to pick winner.", details: error };
  }
}

export { execute };
