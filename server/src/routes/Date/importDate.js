const { Router } = require("express");
const currentDatePostHandler = require("../../handlers/currentDatePostHandler");
const importDatesGetHandler = require("../../handlers/importDatesGetHandler");
const deleteImportDatePutHandler = require("../../handlers/deleteImportDatePutHandler");
const updateStateImportDatePutHandler = require("../../handlers/updateStateImportDatePutHandler");

const dateRouter = Router();

dateRouter.get("/import-dates", importDatesGetHandler);

dateRouter.post("/current-import-date", currentDatePostHandler);

dateRouter.put("/delet-import-date", deleteImportDatePutHandler);

dateRouter.put("/update-state-import-date", updateStateImportDatePutHandler);

module.exports = dateRouter;
