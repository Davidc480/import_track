const deleteImportDatePutController = require("../controllers/deleteImportDatePutController");

const deleteImportDatePutHandler = async (req, res) => {
  try {
    const { date } = req.body;

    const isActive = false;

    const deletBdd = await deleteImportDatePutController(isActive, date);

    res.status(200).json(deletBdd);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = deleteImportDatePutHandler;
