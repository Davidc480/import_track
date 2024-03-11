const { DateEntry } = require("../database");

const currentDatePostController = async (date) => {
  const newDateImport = await DateEntry.create({
    date,
  });

  return newDateImport;
};

module.exports = currentDatePostController;
