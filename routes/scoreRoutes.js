const {Router} = require("express");
const scoreRoutes = Router();
const scoreController= require("../controller/scoreController");
const validation = require("../validation/validation")

scoreRoutes.get("/",scoreController.highScores);
scoreRoutes.post("/",validation,scoreController.scorePost);

module.exports = scoreRoutes;