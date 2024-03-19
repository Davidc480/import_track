const { Router } = require("express");
const dateRouter = require("./Date/importDate");

const router = Router();

router.use("/date", dateRouter);

router.use("/counterDate", dateRouter);

module.exports = router;
