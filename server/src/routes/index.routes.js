const { Router } = require("express");
const dateRouter = require("./Date/importDate");
const dolarPriceRouter = require("../routes/Dollar/DollarPrice");
const dateCounterRoute = require("./dateCounter/dateCounter");
const dataBannerRoute = require("../routes/dataBanner/dataBanner");

const router = Router();

router.use("/date", dateRouter);

router.use("/dollarPrice", dolarPriceRouter);

router.use("/counterDate", dateRouter);

router.use("/dateCounter", dateCounterRoute);

router.use("/dataBanner", dataBannerRoute);

module.exports = router;
