const datesBddCounterPutController = require("../../controllers/dateCounter/datesBddCounterPutController");

const datesBddCounterPutHandler = (req, res) => {
  try {
    const { date, brand } = req.body;

    const datesBdd = datesBddCounterPutController(date, brand);

    res.status(200).json(datesBdd);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = datesBddCounterPutHandler;
