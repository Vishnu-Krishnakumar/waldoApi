const {Router} = require("express");
const scoreRoutes = Router();
const scoreController= require("../controller/scoreController");

scoreRoutes.post("/",scoreController.scorePost);

module.exports = scoreRoutes;