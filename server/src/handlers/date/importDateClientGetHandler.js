const importDateClientGetController = require("../../controllers/date/importDateClientGetController");

const importDateClientGetHandler = async (req, res) => {
  try {
    const { brand, dateId } = req.body;

    const isActive = true;

    const dateIdBdd = parseInt(dateId);

    const dateBdd = await importDateClientGetController(
      brand,
      dateIdBdd,
      isActive
    );
    res.status(200).json(dateBdd);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = importDateClientGetHandler;
