require("dotenv").config();

const { Sequelize } = require("sequelize");

const setupDateEntryModel = require("./models/DateEntry");

const { DB_USER, DB_PASSWORD, DB_HOST, DB, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB}`,
  {
    logging: false,
    native: false,
  }
);

setupDateEntryModel(sequelize);

module.exports = {
  sequelize,
  ...sequelize.models,
};
