-- CreateEnum
CREATE TYPE "Role" AS ENUM ('FAN', 'CELEBRITY');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Celebrity" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "instagramUrl" TEXT NOT NULL,
    "youtubeUrl" TEXT,
    "spotifyUrl" TEXT,
    "fanbase" INTEGER NOT NULL,
    "setlist" TEXT,
    "profileViews" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Celebrity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Follow" (
    "id" TEXT NOT NULL,
    "fanId" TEXT NOT NULL,
    "celebrityId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Follow_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Celebrity_userId_key" ON "Celebrity"("userId");

-- AddForeignKey
ALTER TABLE "Celebrity" ADD CONSTRAINT "Celebrity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_fanId_fkey" FOREIGN KEY ("fanId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_celebrityId_fkey" FOREIGN KEY ("celebrityId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
