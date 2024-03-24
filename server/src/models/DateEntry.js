const { DataTypes } = require("sequelize");

module.exports = sequelize => {
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
      brand: {
        type: DataTypes.TEXT,
      },
      importStatus: {
        type: DataTypes.STRING,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      timestamps: false,
    }
  );
};
