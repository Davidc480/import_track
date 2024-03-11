const { DateEntry } = require("../database");

const updateStateImportDatePutController = async (date, newState) => {
  const updateStateImportDate = await DateEntry.update(
    { importStatus: newState },
    {
      where: {
        dateImport: date,
        isActive: true,
      },
    }
  );

  return updateStateImportDate;
};

module.exports = updateStateImportDatePutController;
