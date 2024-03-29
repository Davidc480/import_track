const { Router } = require("express");
const currentDatePostHandler = require("../../handlers/date/currentDatePostHandler");
const importDatesGetHandler = require("../../handlers/date/importDatesGetHandler");
const deleteImportDatePutHandler = require("../../handlers/date/deleteImportDatePutHandler");
const updateStateImportDatePutHandler = require("../../handlers/date/updateStateImportDatePutHandler");
const importDateClientGetHandler = require("../../handlers/date/importDateClientGetHandler");

const dateRouter = Router();

dateRouter.get("/import-dates", importDatesGetHandler);

dateRouter.get("/import-date-client", importDateClientGetHandler);

dateRouter.post("/current-import-date", currentDatePostHandler);

dateRouter.put("/delete-import-date", deleteImportDatePutHandler);

dateRouter.put("/update-state-import-date", updateStateImportDatePutHandler);

module.exports = dateRouter;
