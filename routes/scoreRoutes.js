const {Router} = require("express");
const scoreRoutes = Router();
const scoreController= require("../controller/scoreController");

scoreRoutes.get("/",scoreController.highScores);
scoreRoutes.post("/",scoreController.scorePost);

module.exports = scoreRoutes;