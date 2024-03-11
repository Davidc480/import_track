const { DateEntry } = require("../database");

const currentDatePostController = async (dateImport, importStatus) => {
  const newDateImport = await DateEntry.create({
    dateImport,
    importStatus,
  });

  return newDateImport;
};

module.exports = currentDatePostController;
