/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - The required column `user_id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");

-- DropTable
DROP TABLE "Message";

-- CreateTable
CREATE TABLE "conversations" (
    "conversation_id" TEXT NOT NULL,
    "is_groupChat" BOOLEAN NOT NULL,

    CONSTRAINT "conversations_pkey" PRIMARY KEY ("conversation_id")
);

-- CreateTable
CREATE TABLE "messages" (
    "messageId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "conversation_id" TEXT NOT NULL,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("messageId")
);

-- CreateTable
CREATE TABLE "_ConversationToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ConversationToUser_AB_unique" ON "_ConversationToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ConversationToUser_B_index" ON "_ConversationToUser"("B");

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_conversation_id_fkey" FOREIGN KEY ("conversation_id") REFERENCES "conversations"("conversation_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConversationToUser" ADD FOREIGN KEY ("A") REFERENCES "conversations"("conversation_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConversationToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
