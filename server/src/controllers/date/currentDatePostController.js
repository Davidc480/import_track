const { DateEntry } = require("../../database");

const currentDatePostController = async (
  dateImport,
  importStatus,
  brand,
  isActive
) => {
  const newDateImport = await DateEntry.create({
    dateImport,
    importStatus,
    brand,
    isActive,
  });

  return newDateImport;
};

module.exports = currentDatePostController;
