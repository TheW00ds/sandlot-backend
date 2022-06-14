-- DropForeignKey
ALTER TABLE "GroupMembership" DROP CONSTRAINT "GroupMembership_groupId_fkey";

-- AlterTable
ALTER TABLE "GroupMembership" ALTER COLUMN "groupId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "GroupMembership" ADD CONSTRAINT "GroupMembership_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;
