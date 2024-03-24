const deleteImportDatePutController = require("../../controllers/date/deleteImportDatePutController");

const deleteImportDatePutHandler = async (req, res) => {
  try {
    const { date, brand } = req.body;

    const isActive = false;

    const deletBdd = await deleteImportDatePutController(isActive, date, brand);

    res.status(200).json(deletBdd);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = deleteImportDatePutHandler;
