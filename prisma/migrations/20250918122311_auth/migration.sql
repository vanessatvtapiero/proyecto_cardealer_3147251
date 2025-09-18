-- CreateTable
CREATE TABLE "alertas" (
    "id_alerta" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo_alerta" TEXT NOT NULL,
    "plate" TEXT NOT NULL,
    "fecha_alerta" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "lugares" (
    "id_lugar" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nombre_lugar" TEXT NOT NULL,
    "Tipo_lugar" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "hora_apertura" TEXT NOT NULL,
    "hora_cierre" TEXT NOT NULL,
    "precio" REAL NOT NULL,
    "alerta_id" INTEGER NOT NULL,
    CONSTRAINT "lugares_alerta_id_fkey" FOREIGN KEY ("alerta_id") REFERENCES "alertas" ("id_alerta") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "estado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "estado" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "estado_id" INTEGER NOT NULL,
    CONSTRAINT "usuarios_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "estado" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_username_key" ON "usuarios"("username");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");
