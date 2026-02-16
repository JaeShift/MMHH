-- AlterTable
ALTER TABLE "public"."EmailBroadcast" ADD COLUMN     "pdfName" TEXT,
ADD COLUMN     "pdfUrl" TEXT,
ALTER COLUMN "sentAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."NewsletterSubscriber" ALTER COLUMN "source" SET DEFAULT 'SPENGA Gahanna QR';
