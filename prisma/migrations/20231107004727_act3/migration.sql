/*
  Warnings:

  - You are about to alter the column `clasificacion` on the `codeTagActivoFijo` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_codeTagActivoFijo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "instalacion" TEXT NOT NULL,
    "edificio" TEXT NOT NULL,
    "emplazamiento" TEXT NOT NULL,
    "atiende" TEXT NOT NULL,
    "clasificacion" INTEGER NOT NULL,
    "acreditable" BOOLEAN NOT NULL,
    "nivelOperacional" INTEGER NOT NULL,
    "sistema" TEXT,
    "activoFijo" TEXT NOT NULL,
    "componente" TEXT NOT NULL,
    "auxiliar" TEXT,
    "correlativo" TEXT NOT NULL,
    "codeActivo" TEXT NOT NULL,
    "userCreater" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_codeTagActivoFijo" ("acreditable", "activoFijo", "atiende", "auxiliar", "clasificacion", "codeActivo", "componente", "correlativo", "createAt", "edificio", "emplazamiento", "id", "instalacion", "nivelOperacional", "userCreater") SELECT "acreditable", "activoFijo", "atiende", "auxiliar", "clasificacion", "codeActivo", "componente", "correlativo", "createAt", "edificio", "emplazamiento", "id", "instalacion", "nivelOperacional", "userCreater" FROM "codeTagActivoFijo";
DROP TABLE "codeTagActivoFijo";
ALTER TABLE "new_codeTagActivoFijo" RENAME TO "codeTagActivoFijo";
CREATE UNIQUE INDEX "codeTagActivoFijo_codeActivo_key" ON "codeTagActivoFijo"("codeActivo");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
