const currentDatePostController = require("../controllers/currentDatePostController");
const verifiDate = require("../helper/verifyDate");

const currentDatePostHandler = async (req, res) => {
  try {
    const { currentDate } = req.body;

    const dateVerify = verifiDate(currentDate);

    if (dateVerify) {
      const currentDateController = await currentDatePostController(
        currentDate
      );
      res.status(200).json(currentDateController);
    }
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

module.exports = currentDatePostHandler;
