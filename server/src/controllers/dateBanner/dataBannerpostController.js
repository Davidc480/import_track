const { dataBanner } = require("../../database");

const dataBannerpostController = async (id, data) => {
  const existingRecord = await dataBanner.findByPk(id);

  if (existingRecord) {
    await existingRecord.update({ data });
    return "Registro actualizado";
  } else {
    await dataBanner.create({ data });
    return "Nuevo registro insertado";
  }
};

module.exports = dataBannerpostController;
