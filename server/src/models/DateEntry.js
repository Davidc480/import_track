const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("DateEntry", {
    idDateEntry: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dateUpdate: {
      type: DataTypes.DATE,
    },
  });
};
