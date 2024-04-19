const { userAdmin } = require("../../database");
const { compare } = require("../../helper/handleBcrypt");

const DashboardLoginPostController = async (user, password) => {
  // Buscar el usuario en la base de datos
  const userBdd = await userAdmin.findOne({ where: { user } });
  console.log(userBdd);
  // Verificar si se encontró un usuario en la base de datos
  if (userBdd) {
    // Si se encontró un usuario, verificar la contraseña
    const checkPassword = await compare(password, userBdd.password);

    // Si la contraseña es correcta, retornar los datos del usuario
    if (userBdd && checkPassword) {
      return {
        data: user,
        // Aquí puedes agregar el token de sesión si lo deseas
      };
    } else {
      // Si la contraseña es incorrecta, retornar false
      return false;
    }
  } else {
    // Si no se encontró ningún usuario, retornar false
    return false;
  }
};

module.exports = DashboardLoginPostController;
