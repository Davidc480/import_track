const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("dollar", {
    idDollar: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    currentPriceDollar: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};
