import { prisma } from "@/lib/prisma";

async function create(data: { title: string; description?: string; slug: string; adminId: string }) {
  return prisma.giveaway.create({
    data: {
      title: data.title,
      description: data.description?.trim() || null,
      slug: data.slug,
      adminId: data.adminId,
    },
  });
}

async function findAll() {
  return prisma.giveaway.findMany({
    include: {
      entries: true,
      winnerEntry: true,
    },
    orderBy: { createdAt: "desc" },
  });
}

async function findById(id: string) {
  return prisma.giveaway.findUnique({
    where: { id },
    include: {
      entries: { orderBy: { createdAt: "desc" } },
      winnerEntry: true,
      admin: true,
    },
  });
}

async function findBySlug(slug: string) {
  return prisma.giveaway.findUnique({
    where: { slug },
  });
}

async function update(id: string, data: { isActive?: boolean; winnerEntryId?: string | null }) {
  return prisma.giveaway.update({
    where: { id },
    data,
  });
}

async function deleteById(id: string) {
  return prisma.giveaway.delete({
    where: { id },
  });
}

export { create, deleteById, findAll, findById, findBySlug, update };
