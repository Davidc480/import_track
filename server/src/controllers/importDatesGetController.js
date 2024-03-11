const { DateEntry } = require("../database");

const importDatesGetController = async () => {
  const findAllImportDates = await DateEntry.findAll();

  return findAllImportDates;
};

module.exports = importDatesGetController;
