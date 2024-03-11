const { Router } = require("express");
const dateRouter = require("./Date/importDate");

const router = Router();

router.use("/date", dateRouter);

module.exports = router;
