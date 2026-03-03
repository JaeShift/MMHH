import { prisma } from "@/lib/prisma";

async function create(data: { firstName?: string; email: string; source?: string }) {
  return prisma.newsletterSubscriber.create({
    data: {
      firstName: data.firstName?.trim() || null,
      email: data.email.toLowerCase().trim(),
      source: data.source?.trim() || "SPENGA Gahanna QR",
    },
  });
}

async function upsert(data: { firstName?: string; email: string; source?: string }) {
  return prisma.newsletterSubscriber.upsert({
    where: { email: data.email.toLowerCase().trim() },
    update: {
      firstName: data.firstName?.trim() || null,
      source: data.source?.trim() || "SPENGA Gahanna QR",
    },
    create: {
      firstName: data.firstName?.trim() || null,
      email: data.email.toLowerCase().trim(),
      source: data.source?.trim() || "SPENGA Gahanna QR",
    },
  });
}

async function findByEmail(email: string) {
  return prisma.newsletterSubscriber.findUnique({
    where: { email: email.toLowerCase().trim() },
  });
}

async function findAll() {
  return prisma.newsletterSubscriber.findMany({
    orderBy: { createdAt: "desc" },
  });
}

async function deleteById(id: string) {
  return prisma.newsletterSubscriber.delete({
    where: { id },
  });
}

async function count() {
  return prisma.newsletterSubscriber.count();
}

async function updateById(id: string, data: { firstName?: string; email: string; source?: string }) {
  return prisma.newsletterSubscriber.update({
    where: { id },
    data: {
      firstName: data.firstName?.trim() || null,
      email: data.email.toLowerCase().trim(),
      source: data.source?.trim() || "SPENGA Gahanna QR",
    },
  });
}

export { count, create, deleteById, findAll, findByEmail, updateById, upsert };
