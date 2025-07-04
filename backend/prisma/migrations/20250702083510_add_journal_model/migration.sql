-- CreateTable
CREATE TABLE "Journal" (
    "id" SERIAL NOT NULL,
    "journal_user" TEXT NOT NULL,
    "ai_insight" TEXT NOT NULL,

    CONSTRAINT "Journal_pkey" PRIMARY KEY ("id")
);
