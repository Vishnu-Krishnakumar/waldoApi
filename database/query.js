const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


async function allChars(){
    const allChars = await prisma.character.findMany();
    return allChars;
}

async function allScores(){
    const highScores = await prisma.highscore.findMany({
        take:10,
        orderBy:{
            time:"asc"
        }
    });
    return highScores;
}

async function addScore(data){
    const addedScore = await prisma.highscore.create({
        data:{
            username: data.username,
            time: parseFloat(data.time),
        }
    })
    return addedScore;
}

module.exports = {
    allChars,
    allScores,
    addScore,
}