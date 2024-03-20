const { Router } = require("express");
const currentPriceDolarGetHandler = require("../../handlers/dollar/currentPriceDolarGetHandler");
const currentPriceDolarPutHandler = require("../../handlers/dollar/currentPriceDolarPutHandler");

const dollarPriceRouter = Router();

dollarPriceRouter.get("/current-price-dolar", currentPriceDolarGetHandler);

dollarPriceRouter.put("/update-price-dolar", currentPriceDolarPutHandler);

module.exports = dollarPriceRouter;
