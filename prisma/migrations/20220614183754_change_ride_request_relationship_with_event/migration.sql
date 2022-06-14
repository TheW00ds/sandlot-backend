-- DropForeignKey
ALTER TABLE "RideRequest" DROP CONSTRAINT "RideRequest_eventId_fkey";

-- AlterTable
ALTER TABLE "RideRequest" ALTER COLUMN "eventId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "RideRequest" ADD CONSTRAINT "RideRequest_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;
