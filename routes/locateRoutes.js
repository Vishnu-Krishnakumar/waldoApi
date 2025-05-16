const {Router} = require("express");
const locateRoutes = Router();
const locateController = require("../controller/locateController");

locateRoutes.get("/",locateController.locate);

module.exports = locateRoutes;