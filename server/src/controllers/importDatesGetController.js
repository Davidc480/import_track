const { DateEntry } = require("../database");

const importDatesGetController = async () => {
  const findAllImportDates = await DateEntry.findAll({
    where: { isActive: true },
  });

  return findAllImportDates;
};

module.exports = importDatesGetController;
