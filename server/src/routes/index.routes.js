const { Router } = require("express");
const dateRouter = require("./Date/importDate");
const dolarPriceRouter = require("../routes/Dollar/DollarPrice");
const dateCounterRoute = require("./dateCounter/dateCounter");
const dataBannerRoute = require("../routes/dataBanner/dataBanner");
const dashboardRoute = require("../routes/dashboard/dashboard");

const router = Router();

router.use("/date", dateRouter);

router.use("/dollarPrice", dolarPriceRouter);

router.use("/counterDate", dateRouter);

router.use("/dateCounter", dateCounterRoute);

router.use("/dataBanner", dataBannerRoute);

router.use("/dashboard", dashboardRoute);

module.exports = router;
