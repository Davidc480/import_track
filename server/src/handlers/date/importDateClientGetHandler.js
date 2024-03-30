const importDateClientGetController = require("../../controllers/date/importDateClientGetController");

const importDateClientGetHandler = async (req, res) => {
  try {
    const { id, brand } = req.query;

    const isActive = true;

    const dateBdd = await importDateClientGetController(id, brand, isActive);
    console.log(dateBdd);

    res.status(200).json(dateBdd);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = importDateClientGetHandler;
