const {Router} = require("express");
const timerRoutes = Router();
const timerController = require("../controller/timerController");

timerRoutes.get("/",timerController.dateTime);

module.exports = timerRoutes;