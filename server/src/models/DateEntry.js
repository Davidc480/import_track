const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "DateEntry",
    {
      idDateEntry: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      dateImport: {
        type: DataTypes.DATEONLY,
      },
      importStatus: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
    }
  );
};
