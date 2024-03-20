const { where } = require("sequelize");
const { dollar } = require("../../database");

const currentPriceDolarPutController = async (priceDollar) => {
  const verifyPrice = await dollar.findOne();
  if (!verifyPrice) {
    const createPrice = await dollar.create({
      currentPriceDollar: 499.72,
    });
    return createPrice;
  } else {
    const newPrice = await dollar.update(
      { currentPriceDollar: priceDollar },
      { where: { idDollar: 1 } }
    );
    return newPrice;
  }
};

module.exports = currentPriceDolarPutController;
