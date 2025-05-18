const jwt = require("jsonwebtoken");

async function dateTime(req,res){

  try {
    jwt.sign({ start: Date.now() }, process.env.SECRET,{ expiresIn: '1h' }, (err, token) => {
      res.cookie("auth_jwt", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 60 * 60 * 1000,
      });
      res.json({
        token,
      });
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports ={
    dateTime,
}