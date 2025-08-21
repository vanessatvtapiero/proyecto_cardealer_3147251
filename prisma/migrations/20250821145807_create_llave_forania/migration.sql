/*
  Warnings:

  - You are about to drop the `alerta` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `alerta`;

-- CreateTable
CREATE TABLE `alertas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `model` VARCHAR(191) NOT NULL,
    `plate` VARCHAR(191) NOT NULL,
    `release_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_available` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comentarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,
    `plate` VARCHAR(191) NOT NULL,
    `release_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_available` BOOLEAN NOT NULL DEFAULT true,
    `alerta_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `comentarios` ADD CONSTRAINT `comentarios_alerta_id_fkey` FOREIGN KEY (`alerta_id`) REFERENCES `alertas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
