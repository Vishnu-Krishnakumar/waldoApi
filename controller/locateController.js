const query = require("../database/query");

async function locate(req,res){
    const characters = await query.allChars();
    const found = characters.find(char=>{
    return(
      req.query.x >= char.x &&
      req.query.x <= char.x + char.width &&
      req.query.y >= char.y && 
      req.query.y <= char.y + char.height
    )
    });
    if(found){
    res.json({query:req.query, character: found.name, found:true});
    }
    else{
        res.json({found:false});
    }
}

module.exports ={
    locate,
}