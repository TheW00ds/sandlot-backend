-- DropForeignKey
ALTER TABLE "EventCommitment" DROP CONSTRAINT "EventCommitment_eventId_fkey";

-- DropForeignKey
ALTER TABLE "EventCommitment" DROP CONSTRAINT "EventCommitment_userId_fkey";

-- AlterTable
ALTER TABLE "EventCommitment" ALTER COLUMN "eventId" DROP NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "EventCommitment" ADD CONSTRAINT "EventCommitment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventCommitment" ADD CONSTRAINT "EventCommitment_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;
