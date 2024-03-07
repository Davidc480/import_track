const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("StatusHistory", {
    idHistory: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idDateEntry: {
      type: DataTypes.INTEGER,
      references: {
        model: "DateEntries",
        key: "idDateEntry",
      },
    },
    idState: {
      type: DataTypes.INTEGER,
      references: {
        model: "States",
        key: "idState",
      },
    },
    dateChange: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
};
