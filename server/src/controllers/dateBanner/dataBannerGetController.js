const { dataBanner } = require("../../database");

const dataBannerGetController = async () => {
  const dateBdd = await dataBanner.findAll();
  return dateBdd;
};

module.exports = dataBannerGetController;
