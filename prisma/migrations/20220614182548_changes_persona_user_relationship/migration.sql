-- DropForeignKey
ALTER TABLE "Persona" DROP CONSTRAINT "Persona_userId_fkey";

-- DropIndex
DROP INDEX "Persona_userId_key";

-- AlterTable
ALTER TABLE "Persona" ALTER COLUMN "bio" DROP NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Persona" ADD CONSTRAINT "Persona_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
