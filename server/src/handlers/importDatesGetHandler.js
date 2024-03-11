const importDatesGetController = require("../controllers/importDatesGetController");

const importDatesGetHandler = async (req, res) => {
  try {
    const datesBdd = await importDatesGetController();

    res.status(200).json(datesBdd);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = importDatesGetHandler;
