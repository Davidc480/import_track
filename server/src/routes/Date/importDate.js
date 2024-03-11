const { Router } = require("express");
const currentDatePostHandler = require("../../handlers/currentDatePostHandler");
const importDatesGetHandler = require("../../handlers/importDatesGetHandler");

const dateRouter = Router();

dateRouter.get("/import-dates", importDatesGetHandler);

dateRouter.post("/current-import-date", currentDatePostHandler);

module.exports = dateRouter;
