/*
  Warnings:

  - You are about to drop the `usuarioFigura` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "usuarioFigura" DROP CONSTRAINT "usuariofigura_idfigura_foreign";

-- DropForeignKey
ALTER TABLE "usuarioFigura" DROP CONSTRAINT "usuariofigura_idusuario_foreign";

-- DropTable
DROP TABLE "usuarioFigura";
