const { userAdmin } = require("../../database");

const DashboardCreatedPostController = async (user, passwordHash) => {
  const userCounter = await userAdmin.count();

  if (userCounter === 0) {
    await userAdmin.create({
      user,
      password: passwordHash,
    });

    return true;
  } else {
    throw new Error(false);
  }
};

module.exports = DashboardCreatedPostController;
