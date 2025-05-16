const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


async function allChars(){
    const allChars = await prisma.character.findMany();
    return allChars;
}

module.exports = {
    allChars,
}