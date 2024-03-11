const { DateEntry } = require("../database");
const currentDatePostController = require("../controllers/currentDatePostController");
const verifiDate = require("../helper/verifyDate");

const currentDatePostHandler = async (req, res) => {
  try {
    const { currentDate, importStatus } = req.body;

    const dateVerify = verifiDate(currentDate);

    if (dateVerify) {
      const verifyExistenceDateBdd = await DateEntry.findOne({
        where: { dateImport: currentDate },
      });
      if (!verifyExistenceDateBdd) {
        const dateImport = new Date(currentDate);
        const currentDateController = await currentDatePostController(
          dateImport,
          importStatus
        );
        res.status(200).json(currentDateController);
      } else {
        throw new Error("La fecha ya existe en la base de datos");
      }
    }
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

module.exports = currentDatePostHandler;
