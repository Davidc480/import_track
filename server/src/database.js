require("dotenv").config();

const { Sequelize } = require("sequelize");

const setupDateEntryModel = require("./models/DateEntry");
const setupStateModel = require("./models/State");
const setupStatusHistoryModel = require("./models/StatusHistory");

const { DB_USER, DB_PASSWORD, DB_HOST, DB, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB}`,
  {
    logging: false,
    native: false,
  }
);

setupDateEntryModel(sequelize);
setupStateModel(sequelize);
setupStatusHistoryModel(sequelize);

const DateEntry = sequelize.model("DateEntry");
const State = sequelize.model("State");
const StatusHistory = sequelize.model("StatusHistory");

DateEntry.hasMany(StatusHistory, { foreignKey: "idDateEntry" });
State.hasMany(StatusHistory, { foreignKey: "idState" });
StatusHistory.belongsTo(DateEntry, { foreignKey: "idDateEntry" });
StatusHistory.belongsTo(State, { foreignKey: "idState" });

module.exports = {
  sequelize,
  ...sequelize.models,
};
