const currentPriceDolarPutController = require("../../controllers/dollar/currentPriceDolarPutController");

const currentPriceDolarPutHandler = async (req, res) => {
  try {
    const { priceDollar } = req.body;
    const newPriceDollar = await currentPriceDolarPutController(priceDollar);
    res.status(200).json(newPriceDollar);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = currentPriceDolarPutHandler;
