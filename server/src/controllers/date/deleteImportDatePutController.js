const { DateEntry } = require("../../database");

const deleteImportDatePutController = async (isActive, date, brand) => {
  const deleteImportDateBdd = await DateEntry.update(
    { isActive: isActive },
    {
      where: {
        dateImport: date,
        brand: brand,
      },
    }
  );

  return deleteImportDateBdd[0] === 1
    ? "La fecha ah sido borrada con exito"
    : "la fecha no existe";
};

module.exports = deleteImportDatePutController;
