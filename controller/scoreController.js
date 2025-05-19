const query = require("../database/query");

async function scorePost(req,res){
    console.log(req.body);
    res.json(req.body);
}

module.exports ={
  scorePost,
}