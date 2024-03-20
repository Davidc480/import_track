const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("datesCounter", {
    idDatesCounter: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dateBrand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
