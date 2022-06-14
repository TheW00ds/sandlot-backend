-- AlterTable
ALTER TABLE "RideRequest" ADD COLUMN     "seats" INTEGER,
ADD COLUMN     "storageSpace" BOOLEAN NOT NULL DEFAULT false;
