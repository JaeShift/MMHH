import { prisma } from "@/lib/prisma";

async function create(data: { subject: string; bodyText: string; recipientCount: number; adminId: string }) {
  return prisma.emailBroadcast.create({
    data: {
      ...data,
      broadcastType: "IMMEDIATE",
      status: "SENT",
      isActive: false,
      sentAt: new Date(),
    },
  });
}

async function createWeeklySchedule(data: {
  subject: string;
  bodyText: string;
  adminId: string;
  timezone: string;
  weeklyDayOfWeek: number;
  weeklyTime: string;
  nextRunAt: Date;
}) {
  return prisma.emailBroadcast.create({
    data: {
      subject: data.subject,
      bodyText: data.bodyText,
      adminId: data.adminId,
      broadcastType: "WEEKLY",
      status: "SCHEDULED",
      isActive: true,
      timezone: data.timezone,
      weeklyDayOfWeek: data.weeklyDayOfWeek,
      weeklyTime: data.weeklyTime,
      nextRunAt: data.nextRunAt,
      sentAt: null,
      recipientCount: 0,
    },
  });
}

async function findAll() {
  return prisma.emailBroadcast.findMany({
    orderBy: { createdAt: "desc" },
    include: { admin: true },
  });
}

async function findDueWeeklyScheduled(asOf: Date) {
  return prisma.emailBroadcast.findMany({
    where: {
      broadcastType: "WEEKLY",
      status: "SCHEDULED",
      isActive: true,
      nextRunAt: {
        lte: asOf,
      },
    },
    orderBy: { nextRunAt: "asc" },
  });
}

async function markScheduledRunSuccess(data: {
  id: string;
  asOf: Date;
  nextRunAt: Date;
  recipientCount: number;
}) {
  return prisma.emailBroadcast.updateMany({
    where: {
      id: data.id,
      broadcastType: "WEEKLY",
      status: "SCHEDULED",
      isActive: true,
      nextRunAt: { lte: data.asOf },
    },
    data: {
      recipientCount: data.recipientCount,
      lastRunAt: data.asOf,
      lastRunStatus: "SUCCESS",
      lastError: null,
      nextRunAt: data.nextRunAt,
    },
  });
}

async function markScheduledRunFailure(data: {
  id: string;
  asOf: Date;
  nextRunAt: Date;
  error: string;
}) {
  return prisma.emailBroadcast.updateMany({
    where: {
      id: data.id,
      broadcastType: "WEEKLY",
      status: "SCHEDULED",
      isActive: true,
      nextRunAt: { lte: data.asOf },
    },
    data: {
      lastRunAt: data.asOf,
      lastRunStatus: "FAILED",
      lastError: data.error,
      nextRunAt: data.nextRunAt,
    },
  });
}

async function findById(id: string) {
  return prisma.emailBroadcast.findUnique({
    where: { id },
  });
}

async function deleteById(id: string) {
  return prisma.emailBroadcast.delete({
    where: { id },
  });
}

export {
    create,
    createWeeklySchedule,
    deleteById,
    findAll,
    findById,
    findDueWeeklyScheduled,
    markScheduledRunFailure,
    markScheduledRunSuccess
};

