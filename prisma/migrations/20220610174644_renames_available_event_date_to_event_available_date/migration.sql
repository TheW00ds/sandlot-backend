/*
  Warnings:

  - You are about to drop the `AvailableEventDate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AvailableEventDate" DROP CONSTRAINT "AvailableEventDate_eventCommitmentId_fkey";

-- DropForeignKey
ALTER TABLE "AvailableEventDate" DROP CONSTRAINT "AvailableEventDate_eventId_fkey";

-- DropTable
DROP TABLE "AvailableEventDate";

-- CreateTable
CREATE TABLE "EventAvailableDate" (
    "id" TEXT NOT NULL,
    "eventId" TEXT,
    "eventCommitmentId" TEXT,
    "date" TIMESTAMP(3),

    CONSTRAINT "EventAvailableDate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EventAvailableDate" ADD CONSTRAINT "EventAvailableDate_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventAvailableDate" ADD CONSTRAINT "EventAvailableDate_eventCommitmentId_fkey" FOREIGN KEY ("eventCommitmentId") REFERENCES "EventCommitment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
