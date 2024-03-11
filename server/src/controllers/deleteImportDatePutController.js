const { DateEntry } = require("../database");

const deleteImportDatePutController = async (isActive, date) => {
  const deleteImportDateBdd = await DateEntry.update(
    { isActive: isActive },
    {
      where: {
        dateImport: date,
      },
    }
  );

  return deleteImportDateBdd[0] === 1
    ? "La fecha ah sido borrada con exito"
    : "la fecha no existe";
};

module.exports = deleteImportDatePutController;
