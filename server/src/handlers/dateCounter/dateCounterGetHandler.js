const dateCounterGetController = require("../../controllers/dateCounter/dateCounterGetController");

const dateCounterGetHandler = async (req, res) => {
  try {
    const dateCounter = await dateCounterGetController();
    res.status(200).json(dateCounter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = dateCounterGetHandler;
