const { Router } = require("express");
const dateCounterGetHandler = require("../../handlers/dateCounter/dateCounterGetHandler");
const datesBddCounterPutHandler = require("../../handlers/dateCounter/datesBddCounterPutHandler");

const dateCounterRoute = Router();

dateCounterRoute.get("/counter", dateCounterGetHandler);

dateCounterRoute.put("/dates-counter", datesBddCounterPutHandler);

module.exports = dateCounterRoute;
