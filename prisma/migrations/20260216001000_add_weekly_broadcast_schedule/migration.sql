-- AlterTable
ALTER TABLE "public"."EmailBroadcast"
ADD COLUMN "broadcastType" TEXT NOT NULL DEFAULT 'IMMEDIATE',
ADD COLUMN "status" TEXT NOT NULL DEFAULT 'SENT',
ADD COLUMN "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN "timezone" TEXT,
ADD COLUMN "weeklyDayOfWeek" INTEGER,
ADD COLUMN "weeklyTime" TEXT,
ADD COLUMN "nextRunAt" TIMESTAMP(3),
ADD COLUMN "lastRunAt" TIMESTAMP(3),
ADD COLUMN "lastRunStatus" TEXT,
ADD COLUMN "lastError" TEXT;

-- AlterTable
ALTER TABLE "public"."EmailBroadcast"
ALTER COLUMN "sentAt" DROP NOT NULL;
