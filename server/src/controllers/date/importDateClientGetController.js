const { DateEntry } = require("../../database");

const importDateClientGetController = async isActive => {
  const dateBdd = await DateEntry.findAll({
    where: {
      isActive,
    },
  });

  console.log(dateBdd);

  const { dateImport, brand, importStatus, dateId } = dateBdd;

  const status = dateBdd
    ? [{ dateImport, brand, importStatus, dateId }]
    : "Si no encuentras tu fecha, tu pedido está pendiente.";
  return status;
};

module.exports = importDateClientGetController;
