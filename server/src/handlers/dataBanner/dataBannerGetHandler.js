const dataBannerGetController = require("../../controllers/dateBanner/dataBannerGetController");

const dataBannerGetHandler = async (req, res) => {
  try {
    const dataBannerBdd = await dataBannerGetController();
    res.status(200).json(dataBannerBdd);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = dataBannerGetHandler;
