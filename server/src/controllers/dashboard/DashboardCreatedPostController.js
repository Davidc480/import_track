const { userAdmin } = require("../../database");

const DashboardCreatedPostController = async (user, passwordHash) => {
  const userCounter = await userAdmin.count();

  if (userCounter === 0) {
    const createdUser = await userAdmin.create({
      user,
      password: passwordHash,
    });

    return true;
  } else {
    return false;
  }
};

module.exports = DashboardCreatedPostController;
