const { datesCounter } = require("../../database");
const calculateTimeMissing = require("../../helper/calculateTimeMissing");

const dateCounterGetController = async () => {
  const findAlldates = await datesCounter.findAll();
  const calculateTime = calculateTimeMissing(findAlldates);
  return calculateTime;
};

module.exports = dateCounterGetController;
