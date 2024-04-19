const DashboardCreatedPostController = require("../../controllers/dashboard/DashboardCreatedPostController");
const { encrypt } = require("../../helper/handleBcrypt");

const DashboardCreatedPostHandler = async (req, res) => {
  try {
    const { user, password } = req.body;
    const passwordHash = await encrypt(password);
    const createdUser = await DashboardCreatedPostController(
      user,
      passwordHash
    );
    res.status(200).json(createdUser);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = DashboardCreatedPostHandler;
