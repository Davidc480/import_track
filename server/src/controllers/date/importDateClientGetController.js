const { DateEntry } = require("../../database");

const importDateClientGetController = async (dateId, brand, isActive) => {
  const dateBdd = await DateEntry.findOne({
    where: {
      dateId,
      brand,
      isActive,
    },
  });

  const status = dateBdd
    ? dateBdd.importStatus
    : "El estado del pedido está pendiente.";
  return status;
};

module.exports = importDateClientGetController;
