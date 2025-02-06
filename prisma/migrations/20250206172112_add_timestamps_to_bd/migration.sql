-- CreateTable
CREATE TABLE "figura" (
    "id" BIGSERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "idModelo" BIGINT NOT NULL,
    "idShow" BIGINT NOT NULL,
    "fechaCompra" DATE,
    "precio" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "figura_id_primary" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "figuraImagen" (
    "id" BIGSERIAL NOT NULL,
    "idFigura" BIGINT NOT NULL,
    "imagenUrl" BIGINT,
    "descripcion" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "figuraimagen_id_primary" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marca" (
    "id" BIGSERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "idPais" BIGINT NOT NULL,
    "idUsuario" BIGINT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "marca_id_primary" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modelo" (
    "id" BIGSERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "idMarca" BIGINT NOT NULL,
    "idUsuario" BIGINT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "modelo_id_primary" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pais" (
    "id" BIGSERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "pais_id_primary" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "show" (
    "id" BIGSERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "show_id_primary" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" BIGSERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "usuario_id_primary" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarioFigura" (
    "id" BIGSERIAL NOT NULL,
    "idUsuario" BIGINT NOT NULL,
    "idFigura" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "usuariofigura_id_primary" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "figura_id_key" ON "figura"("id");

-- CreateIndex
CREATE INDEX "figura_id_index" ON "figura"("id");

-- CreateIndex
CREATE UNIQUE INDEX "figuraImagen_id_key" ON "figuraImagen"("id");

-- CreateIndex
CREATE UNIQUE INDEX "marca_id_key" ON "marca"("id");

-- CreateIndex
CREATE UNIQUE INDEX "modelo_id_key" ON "modelo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pais_id_key" ON "pais"("id");

-- CreateIndex
CREATE UNIQUE INDEX "show_id_key" ON "show"("id");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_id_key" ON "usuario"("id");

-- CreateIndex
CREATE UNIQUE INDEX "usuarioFigura_id_key" ON "usuarioFigura"("id");

-- AddForeignKey
ALTER TABLE "figura" ADD CONSTRAINT "figura_idmodelo_foreign" FOREIGN KEY ("idModelo") REFERENCES "modelo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "figura" ADD CONSTRAINT "figura_idshow_foreign" FOREIGN KEY ("idShow") REFERENCES "show"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "figuraImagen" ADD CONSTRAINT "figuraimagen_idfigura_foreign" FOREIGN KEY ("idFigura") REFERENCES "figura"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "marca" ADD CONSTRAINT "marca_idpais_foreign" FOREIGN KEY ("idPais") REFERENCES "pais"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "marca" ADD CONSTRAINT "marca_idusuario_foreign" FOREIGN KEY ("idUsuario") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "modelo" ADD CONSTRAINT "modelo_idmarca_foreign" FOREIGN KEY ("idMarca") REFERENCES "marca"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "modelo" ADD CONSTRAINT "modelo_idusuario_foreign" FOREIGN KEY ("idUsuario") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuarioFigura" ADD CONSTRAINT "usuariofigura_idfigura_foreign" FOREIGN KEY ("idFigura") REFERENCES "figura"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuarioFigura" ADD CONSTRAINT "usuariofigura_idusuario_foreign" FOREIGN KEY ("idUsuario") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
