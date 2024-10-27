const { DateEntry } = require("../../database");

const importDateClientGetController = async (brand, isActive) => {
  const dateBdd = await DateEntry.findOne({
    where: {
      brand,
      isActive,
    },
  });

  const status = dateBdd
    ? dateBdd.importStatus
    : "Si no encuentras tu fecha, tu pedido está pendiente.";
  return status;
};

module.exports = importDateClientGetController;
