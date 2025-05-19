const query = require("../database/query");

async function scorePost(req,res){
    console.log(req.body);
    const result = await query.addScore(req.body.data);
    res.json(result);
}

async function highScores(req,res){
    const scores = await query.allScores()
    res.json(scores);
}
module.exports ={
  scorePost,
  highScores,
}