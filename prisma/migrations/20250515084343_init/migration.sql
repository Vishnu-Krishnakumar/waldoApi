-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "finishedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
