const { datesCounter } = require("../../database");

const datesBddCounterPutController = async (date, brand) => {
  const verifyExistenceBdd = await datesCounter.findOne({
    where: {
      dateBrand: brand,
    },
  });

  if (!verifyExistenceBdd) {
    const datesCounterBdd = await datesCounter.create({
      date,
      dateBrand: brand,
    });
    return datesCounterBdd;
  } else {
    const updateDatesCounterBdd = await datesCounter.update(
      {
        date,
      },
      {
        where: {
          dateBrand: brand,
        },
      }
    );
    return updateDatesCounterBdd;
  }
};

module.exports = datesBddCounterPutController;
