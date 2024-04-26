const { userAdmin } = require("../../database");
const { compare } = require("../../helper/handleBcrypt");
const { tokenLogin } = require("../../helper/tokenSession");
const DashboardLoginPostController = async (user, password) => {
  const userBdd = await userAdmin.findOne({ where: { user } });

  if (userBdd) {
    const checkPassword = await compare(password, userBdd.password);

    const tokenSession = await tokenLogin(user);

    if (userBdd && checkPassword) {
      return {
        login: true,
        tokenSession,
      };
    } else {
      return { login: false };
    }
  } else {
    return { login: false };
  }
};

module.exports = DashboardLoginPostController;
