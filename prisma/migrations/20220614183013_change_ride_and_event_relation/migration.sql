-- DropForeignKey
ALTER TABLE "Ride" DROP CONSTRAINT "Ride_eventId_fkey";

-- AlterTable
ALTER TABLE "Ride" ALTER COLUMN "eventId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Ride" ADD CONSTRAINT "Ride_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;
