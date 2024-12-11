/*
  Warnings:

  - The primary key for the `jobs` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "jobs" DROP CONSTRAINT "jobs_pkey",
ADD COLUMN     "companyLogoUrl" TEXT,
ALTER COLUMN "location" DROP NOT NULL,
ALTER COLUMN "applicationEmail" DROP NOT NULL,
ALTER COLUMN "applicationUrl" DROP NOT NULL,
ALTER COLUMN "approved" SET DEFAULT false,
ALTER COLUMN "description" DROP NOT NULL;
