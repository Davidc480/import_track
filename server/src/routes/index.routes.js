const { Router } = require("express");
const DataEntryResponse = require("../handler/DateEntrysResponse");

const router = Router();

router.use("/", DataEntryResponse);

module.exports = router;
