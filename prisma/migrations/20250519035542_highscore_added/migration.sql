-- CreateTable
CREATE TABLE "highscore" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "time" INTEGER NOT NULL,

    CONSTRAINT "highscore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "highscore_username_key" ON "highscore"("username");
