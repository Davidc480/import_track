const { userAdmin } = require("../../database");
const { compare } = require("../../helper/handleBcrypt");
const { tokenLogin } = require("../../helper/tokenSession");

const DashboardLoginPostController = async (username, password) => {
  const userBdd = await userAdmin.findOne({ where: { user: username } });

  if (userBdd) {
    const checkPassword = await compare(password, userBdd.password);

    const tokenSession = await tokenLogin(username);

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
