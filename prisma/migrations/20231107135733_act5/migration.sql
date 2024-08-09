/*
  Warnings:

  - You are about to drop the column `acreditable` on the `codeTagActivoFijo` table. All the data in the column will be lost.

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
    "conRequisito" TEXT,
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
INSERT INTO "new_codeTagActivoFijo" ("activoFijo", "atiende", "auxiliar", "clasificacion", "codeActivo", "componente", "correlativo", "createAt", "edificio", "emplazamiento", "id", "instalacion", "nivelOperacional", "sistema", "userCreater") SELECT "activoFijo", "atiende", "auxiliar", "clasificacion", "codeActivo", "componente", "correlativo", "createAt", "edificio", "emplazamiento", "id", "instalacion", "nivelOperacional", "sistema", "userCreater" FROM "codeTagActivoFijo";
DROP TABLE "codeTagActivoFijo";
ALTER TABLE "new_codeTagActivoFijo" RENAME TO "codeTagActivoFijo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
