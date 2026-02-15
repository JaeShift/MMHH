"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { execute as createGiveawayUseCase } from "../use-cases/CreateGiveaway";
import { execute as enterGiveawayUseCase } from "../use-cases/EnterGiveaway";
import { execute as pickGiveawayWinnerUseCase } from "../use-cases/PickGiveawayWinner";
import { execute as sendWinnerEmailUseCase } from "../use-cases/SendWinnerEmail";
import { createGiveawaySchema, deleteGiveawaySchema, updateGiveawayStatusSchema } from "../dtos/GiveawayDto";
import { deleteById, findAll, findById, update } from "../repositories/GiveawayRepository";
import { countByGiveawayId } from "../repositories/GiveawayEntryRepository";

async function createGiveawayAction(input: { title: string; description?: string }) {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, data: null, error: "Unauthorized" };
  }

  try {
    const parsed = createGiveawaySchema.parse(input);
    const result = await createGiveawayUseCase({
      ...parsed,
      adminId: session.user.id,
    });
    if (!result.success) {
      return { success: false, data: null, error: result.error };
    }
    revalidatePath("/admin/giveaways");
    return { success: true, data: result.data };
  } catch {
    return { success: false, data: null, error: "Unable to create giveaway." };
  }
}

async function getGiveawaysAction() {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, data: [], error: "Unauthorized" };
  }
  const giveaways = await findAll();
  return { success: true, data: giveaways };
}

async function getGiveawayByIdAction(id: string) {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, data: null, error: "Unauthorized" };
  }
  const giveaway = await findById(id);
  return { success: true, data: giveaway };
}

async function enterGiveawayAction(input: { giveawayId: string; firstName: string; email: string }) {
  const result = await enterGiveawayUseCase(input);
  if (!result.success) {
    return { success: false, data: null, error: result.error };
  }
  revalidatePath(`/giveaway/${result.data?.giveawayId}`);
  revalidatePath("/admin/giveaways");
  return { success: true, data: result.data };
}

async function pickWinnerAction(input: { giveawayId: string }) {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, data: null, error: "Unauthorized" };
  }

  const result = await pickGiveawayWinnerUseCase(input);
  if (!result.success) {
    return { success: false, data: null, error: result.error };
  }

  revalidatePath("/admin/giveaways");
  revalidatePath(`/admin/giveaways/${input.giveawayId}`);
  return { success: true, data: result.data };
}

async function sendWinnerEmailAction(input: { email: string; firstName: string; subject: string; bodyText: string }) {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, data: null, error: "Unauthorized" };
  }

  const result = await sendWinnerEmailUseCase(input);
  if (!result.success) {
    return { success: false, data: null, error: result.error };
  }
  return { success: true, data: result.data };
}

async function deleteGiveawayAction(input: { id: string }) {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, data: null, error: "Unauthorized" };
  }

  try {
    const parsed = deleteGiveawaySchema.parse(input);
    const deleted = await deleteById(parsed.id);
    revalidatePath("/admin/giveaways");
    return { success: true, data: deleted };
  } catch {
    return { success: false, data: null, error: "Unable to delete giveaway." };
  }
}

async function toggleGiveawayActiveAction(input: { id: string; isActive: boolean }) {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, data: null, error: "Unauthorized" };
  }

  try {
    const parsed = updateGiveawayStatusSchema.parse(input);
    const updated = await update(parsed.id, { isActive: parsed.isActive });
    revalidatePath("/admin/giveaways");
    revalidatePath(`/admin/giveaways/${parsed.id}`);
    return { success: true, data: updated };
  } catch {
    return { success: false, data: null, error: "Unable to update giveaway." };
  }
}

async function getGiveawayEntryCountAction(giveawayId: string) {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, data: 0, error: "Unauthorized" };
  }
  const count = await countByGiveawayId(giveawayId);
  return { success: true, data: count };
}

export {
  createGiveawayAction,
  deleteGiveawayAction,
  enterGiveawayAction,
  getGiveawayByIdAction,
  getGiveawayEntryCountAction,
  getGiveawaysAction,
  pickWinnerAction,
  sendWinnerEmailAction,
  toggleGiveawayActiveAction,
};
