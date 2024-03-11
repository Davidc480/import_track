const { Router } = require("express");
const currentDatePostHandler = require("../../handlers/currentDatePostHandler");

const dateRouter = Router();

dateRouter.post("/current-import-date", currentDatePostHandler);

module.exports = dateRouter;
