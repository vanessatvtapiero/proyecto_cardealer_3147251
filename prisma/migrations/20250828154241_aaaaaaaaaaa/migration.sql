/*
  Warnings:

  - The primary key for the `alertas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `alertas` table. All the data in the column will be lost.
  - You are about to drop the column `is_available` on the `alertas` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `alertas` table. All the data in the column will be lost.
  - You are about to drop the column `release_date` on the `alertas` table. All the data in the column will be lost.
  - You are about to drop the `comentarios` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_alerta` to the `alertas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_alerta` to the `alertas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `comentarios` DROP FOREIGN KEY `comentarios_alerta_id_fkey`;

-- AlterTable
ALTER TABLE `alertas` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `is_available`,
    DROP COLUMN `model`,
    DROP COLUMN `release_date`,
    ADD COLUMN `fecha_alerta` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `id_alerta` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `tipo_alerta` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_alerta`);

-- DropTable
DROP TABLE `comentarios`;

-- CreateTable
CREATE TABLE `lugares` (
    `id_lugar` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre_lugar` VARCHAR(191) NOT NULL,
    `Tipo_lugar` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `hora_apertura` VARCHAR(191) NOT NULL,
    `hora_cierre` VARCHAR(191) NOT NULL,
    `precio` DOUBLE NOT NULL,
    `alerta_id` INTEGER NOT NULL,

    PRIMARY KEY (`id_lugar`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `lugares` ADD CONSTRAINT `lugares_alerta_id_fkey` FOREIGN KEY (`alerta_id`) REFERENCES `alertas`(`id_alerta`) ON DELETE RESTRICT ON UPDATE CASCADE;
