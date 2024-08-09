/*
  Warnings:

  - Made the column `conRequisito` on table `codeTagActivoFijo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sistema` on table `codeTagActivoFijo` required. This step will fail if there are existing NULL values in that column.

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
    "conRequisito" TEXT NOT NULL,
    "nivelOperacional" INTEGER NOT NULL,
    "sistema" TEXT NOT NULL,
    "activoFijo" TEXT NOT NULL,
    "componente" TEXT NOT NULL,
    "auxiliar" TEXT,
    "correlativo" TEXT NOT NULL,
    "codeActivo" TEXT NOT NULL,
    "userCreater" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_codeTagActivoFijo" ("activoFijo", "atiende", "auxiliar", "clasificacion", "codeActivo", "componente", "conRequisito", "correlativo", "createAt", "edificio", "emplazamiento", "id", "instalacion", "nivelOperacional", "sistema", "userCreater") SELECT "activoFijo", "atiende", "auxiliar", "clasificacion", "codeActivo", "componente", "conRequisito", "correlativo", "createAt", "edificio", "emplazamiento", "id", "instalacion", "nivelOperacional", "sistema", "userCreater" FROM "codeTagActivoFijo";
DROP TABLE "codeTagActivoFijo";
ALTER TABLE "new_codeTagActivoFijo" RENAME TO "codeTagActivoFijo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
