const datesBddCounterPutController = require("../../controllers/dateCounter/datesBddCounterPutController");

const datesBddCounterPutHandler = async (req, res) => {
  try {
    const { date, brand } = req.body;

    const dateFormat = new Date(date);
    const datesBdd = await datesBddCounterPutController(dateFormat, brand);

    res.status(200).json(datesBdd);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = datesBddCounterPutHandler;
