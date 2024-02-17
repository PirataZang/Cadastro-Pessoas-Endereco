-- CreateTable
CREATE TABLE "Pessoa" (
    "pes_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pes_nome" TEXT NOT NULL,
    "pes_sexo" TEXT NOT NULL,
    "pes_estado_civil" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Endereco" (
    "end_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "end_rua" TEXT NOT NULL,
    "end_bairro" TEXT NOT NULL,
    "end_cidade" TEXT NOT NULL,
    "pes_id" INTEGER NOT NULL,
    CONSTRAINT "Endereco_pes_id_fkey" FOREIGN KEY ("pes_id") REFERENCES "Pessoa" ("pes_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
