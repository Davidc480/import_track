const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("dataBanner", {
    idDataBanner: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data: {
      type: DataTypes.STRING,
    },
  });
};
