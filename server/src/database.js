require("dotenv").config();

const { Sequelize } = require("sequelize");

const setupDateEntryModel = require("./models/DateEntry");
const setupDollarModel = require("./models/dollar");
const setupDatesCounterModel = require("./models/datesCounter");
const setupDataBannerModel = require("./models/dataBanner");

const { DB_USER, DB_PASSWORD, DB_HOST, DB, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB}`,
  {
    logging: false,
    native: false,
  }
);

//inicializamos los modelos en la base de datos
setupDateEntryModel(sequelize);
setupDollarModel(sequelize);
setupDatesCounterModel(sequelize);
setupDataBannerModel(sequelize);

module.exports = {
  sequelize,
  ...sequelize.models,
};
