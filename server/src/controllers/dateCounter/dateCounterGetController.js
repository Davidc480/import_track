const { datesCounter } = require("../../database");

const dateCounterGetController = async () => {
  const findAlldates = await datesCounter.findAll();
  return findAlldates;
};

module.exports = dateCounterGetController;
