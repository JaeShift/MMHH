import { enterGiveawaySchema } from "../dtos/GiveawayEntryDto";
import { create, findByGiveawayIdAndEmail } from "../repositories/GiveawayEntryRepository";
import { findById } from "../repositories/GiveawayRepository";

async function execute(input: { giveawayId: string; firstName: string; email: string }) {
  try {
    const parsed = enterGiveawaySchema.parse(input);
    const giveaway = await findById(parsed.giveawayId);
    if (!giveaway || !giveaway.isActive) {
      return { success: false, error: "This giveaway is not active." };
    }

    const existingEntry = await findByGiveawayIdAndEmail(parsed.giveawayId, parsed.email);
    if (existingEntry) {
      return { success: false, error: "This email is already entered." };
    }

    const entry = await create(parsed);
    return { success: true, data: entry };
  } catch (error) {
    return { success: false, error: "Unable to enter giveaway.", details: error };
  }
}

export { execute };
