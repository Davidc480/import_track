const updateStateImportDatePutController = require("../controllers/updateStateImportDatePutController");

const updateStateImportDatePutHandler = async (req, res) => {
  try {
    const { date, newState } = req.body;

    const updateState = await updateStateImportDatePutController(
      date,
      newState
    );

    res.status(200).json(updateState);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = updateStateImportDatePutHandler;
