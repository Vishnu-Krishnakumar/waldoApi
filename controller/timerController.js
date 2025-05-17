
async function dateTime(req,res){
  res.json(Date.now());
}

module.exports ={
    dateTime,
}