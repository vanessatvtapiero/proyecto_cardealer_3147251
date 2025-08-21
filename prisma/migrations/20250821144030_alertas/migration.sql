/*
  Warnings:

  - You are about to drop the column `name` on the `alerta` table. All the data in the column will be lost.
  - Added the required column `model` to the `alerta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plate` to the `alerta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `alerta` DROP COLUMN `name`,
    ADD COLUMN `is_available` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `model` VARCHAR(191) NOT NULL,
    ADD COLUMN `plate` VARCHAR(191) NOT NULL,
    ADD COLUMN `release_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
