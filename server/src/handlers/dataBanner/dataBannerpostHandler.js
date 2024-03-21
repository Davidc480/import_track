const dataBannerpostController = require("../../controllers/dateBanner/dataBannerpostController");

const dataBannerpostHandler = async (req, res) => {
  try {
    const { id, data } = req.body;
    const dataBannerBdd = await dataBannerpostController(id, data);
    res.status(200).json(dataBannerBdd);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = dataBannerpostHandler;
