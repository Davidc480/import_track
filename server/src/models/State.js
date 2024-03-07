const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("State", {
    idState: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    stateName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
