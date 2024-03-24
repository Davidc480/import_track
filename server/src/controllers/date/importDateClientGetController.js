const { DateEntry } = require("../../database");

const importDateClientGetController = async (brand, dateId, isActive) => {
  const dateBdd = await DateEntry.findOne({
    where: {
      brand,
      dateId,
      isActive,
    },
  });

  const status = dateBdd ? dateBdd.importStatus : null;
  return status;
};

module.exports = importDateClientGetController;
