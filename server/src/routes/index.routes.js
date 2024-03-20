const { Router } = require("express");
const dateRouter = require("./Date/importDate");
const dolarPriceRouter = require("../routes/Dollar/DollarPrice");

const router = Router();

router.use("/date", dateRouter);

router.use("/dollarPrice", dolarPriceRouter);

router.use("/counterDate", dateRouter);

module.exports = router;
