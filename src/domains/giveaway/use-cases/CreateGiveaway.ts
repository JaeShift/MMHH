import { customAlphabet } from "nanoid";
import { createGiveawaySchema } from "../dtos/GiveawayDto";
import { create } from "../repositories/GiveawayRepository";

const randomSlug = customAlphabet("abcdefghijkmnopqrstuvwxyz23456789", 10);

async function execute(input: { title: string; description?: string; adminId: string }) {
  try {
    const parsed = createGiveawaySchema.parse({
      title: input.title,
      description: input.description,
    });

    const base = parsed.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 32);
    const slug = `${base}-${randomSlug()}`;

    const giveaway = await create({
      title: parsed.title,
      description: parsed.description || undefined,
      slug,
      adminId: input.adminId,
    });

    return { success: true, data: giveaway };
  } catch (error) {
    return { success: false, error: "Unable to create giveaway.", details: error };
  }
}

export { execute };
