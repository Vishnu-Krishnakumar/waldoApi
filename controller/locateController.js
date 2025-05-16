const query = require("../database/query");

async function locate(req,res){
    console.log("whatsup");
    const characters = await query.allChars();
    const found = characters.find(char=>{
        console.log(req.query)
        console.log(char);
    return(
      req.query.x >= char.x &&
      req.query.x <= char.x + char.width &&
      req.query.y >= char.y && 
      req.query.y <= char.y + char.height
    )
    });
    console.log(found);
    if(found){
    res.json({query:req.query,character: found.name});
    }
    else{
        res.json("Not found");
    }
}

module.exports ={
    locate,
}