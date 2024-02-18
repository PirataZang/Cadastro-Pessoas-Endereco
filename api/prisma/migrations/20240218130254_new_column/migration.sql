/*
  Warnings:

  - Added the required column `pes_data_nascimento` to the `Pessoa` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pessoa" (
    "pes_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pes_nome" TEXT NOT NULL,
    "pes_sexo" TEXT NOT NULL,
    "pes_estado_civil" TEXT NOT NULL,
    "pes_data_nascimento" DATETIME NOT NULL
);
INSERT INTO "new_Pessoa" ("pes_estado_civil", "pes_id", "pes_nome", "pes_sexo") SELECT "pes_estado_civil", "pes_id", "pes_nome", "pes_sexo" FROM "Pessoa";
DROP TABLE "Pessoa";
ALTER TABLE "new_Pessoa" RENAME TO "Pessoa";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
