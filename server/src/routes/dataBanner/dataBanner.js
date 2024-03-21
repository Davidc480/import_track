const { Router } = require("express");
const dataBannerGetHandler = require("../../handlers/dataBanner/dataBannerGetHandler");
const dataBannerpostHandler = require("../../handlers/dataBanner/dataBannerpostHandler");

const dataBannerRoute = Router();

dataBannerRoute.get("/dataBanner", dataBannerGetHandler);

dataBannerRoute.put("/createDataBanner", dataBannerpostHandler);

module.exports = dataBannerRoute;
