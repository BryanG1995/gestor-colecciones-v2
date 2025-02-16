-- AlterTable
ALTER TABLE "figura" ADD COLUMN     "idUsuario" BIGINT;

-- AddForeignKey
ALTER TABLE "figura" ADD CONSTRAINT "figura_idusuario_foreign" FOREIGN KEY ("idUsuario") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
