-- CreateTable
CREATE TABLE "Agenda" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hora" TIMESTAMP(3) NOT NULL,
    "descricao" TEXT NOT NULL,
    "prioridade" TEXT NOT NULL,

    CONSTRAINT "Agenda_pkey" PRIMARY KEY ("id")
);
