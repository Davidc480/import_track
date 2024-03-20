const currentPriceDolarGetController = require("../../controllers/dollar/currentPriceDolarGetController");

const currentPriceDolarGetHandler = async (req, res) => {
  try {
    const currentPriceDollar = await currentPriceDolarGetController();
    res.status(200).json(currentPriceDollar);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

module.exports = currentPriceDolarGetHandler;
