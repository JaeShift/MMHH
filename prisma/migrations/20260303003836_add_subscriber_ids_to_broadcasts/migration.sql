-- AlterTable
ALTER TABLE "public"."EmailBroadcast" ADD COLUMN     "subscriberIds" TEXT[] DEFAULT ARRAY[]::TEXT[];
