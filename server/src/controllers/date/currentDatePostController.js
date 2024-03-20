const { DateEntry } = require("../../database");

const currentDatePostController = async (
  dateImport,
  importStatus,
  isActive
) => {
  const newDateImport = await DateEntry.create({
    dateImport,
    importStatus,
    isActive,
  });

  return newDateImport;
};

module.exports = currentDatePostController;
