import { prisma } from "@/lib/prisma";

async function findByEmail(email: string) {
  return prisma.admin.findUnique({
    where: { email: email.toLowerCase().trim() },
  });
}

export { findByEmail };
