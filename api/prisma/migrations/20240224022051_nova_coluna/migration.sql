/*
  Warnings:

  - Added the required column `end_numero` to the `Endereco` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Endereco" (
    "end_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "end_rua" TEXT NOT NULL,
    "end_bairro" TEXT NOT NULL,
    "end_cidade" TEXT NOT NULL,
    "end_numero" INTEGER NOT NULL,
    "pes_id" INTEGER NOT NULL,
    CONSTRAINT "Endereco_pes_id_fkey" FOREIGN KEY ("pes_id") REFERENCES "Pessoa" ("pes_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Endereco" ("end_bairro", "end_cidade", "end_id", "end_rua", "pes_id") SELECT "end_bairro", "end_cidade", "end_id", "end_rua", "pes_id" FROM "Endereco";
DROP TABLE "Endereco";
ALTER TABLE "new_Endereco" RENAME TO "Endereco";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
