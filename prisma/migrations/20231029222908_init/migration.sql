-- CreateTable
CREATE TABLE "codeTagActivoFijo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "instalacion" TEXT NOT NULL,
    "edificio" TEXT NOT NULL,
    "emplazamiento" TEXT NOT NULL,
    "atiende" TEXT NOT NULL,
    "clasificacion" TEXT NOT NULL,
    "acreditable" BOOLEAN NOT NULL,
    "nivelOperacional" INTEGER NOT NULL,
    "activoFijo" TEXT NOT NULL,
    "componente" TEXT NOT NULL,
    "auxiliar" TEXT,
    "correlativo" TEXT NOT NULL,
    "codeActivo" TEXT NOT NULL,
    "userCreater" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
