const { dollar } = require("../../database");

const currentPriceDolarGetController = async () => {
  const currentDollar = await dollar.findOne();

  if (!currentDollar) {
    const currenfirstPriceDollar = await dollar.create({
      currentPriceDollar: 499.72,
    });
    return currenfirstPriceDollar;
  } else {
    return currentDollar;
  }
};

module.exports = currentPriceDolarGetController;
