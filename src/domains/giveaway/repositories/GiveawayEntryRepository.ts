import { prisma } from "@/lib/prisma";

async function create(data: { giveawayId: string; firstName: string; email: string }) {
  return prisma.giveawayEntry.create({
    data: {
      giveawayId: data.giveawayId,
      firstName: data.firstName.trim(),
      email: data.email.toLowerCase().trim(),
    },
  });
}

async function findByGiveawayId(giveawayId: string) {
  return prisma.giveawayEntry.findMany({
    where: { giveawayId },
    orderBy: { createdAt: "desc" },
  });
}

async function findById(id: string) {
  return prisma.giveawayEntry.findUnique({
    where: { id },
  });
}

async function countByGiveawayId(giveawayId: string) {
  return prisma.giveawayEntry.count({
    where: { giveawayId },
  });
}

async function findByGiveawayIdAndEmail(giveawayId: string, email: string) {
  return prisma.giveawayEntry.findFirst({
    where: { giveawayId, email: email.toLowerCase().trim() },
  });
}

export { countByGiveawayId, create, findByGiveawayId, findByGiveawayIdAndEmail, findById };
