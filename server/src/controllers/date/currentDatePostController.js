const { DateEntry } = require("../../database");

const currentDatePostController = async (
  dateImport,
  importStatus,
  brand,
  dateId,
  isActive
) => {
  const newDateImport = await DateEntry.create({
    dateImport,
    importStatus,
    brand,
    dateId,
    isActive,
  });

  return newDateImport;
};

module.exports = currentDatePostController;
