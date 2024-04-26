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
    res.status(201).json({ response: createdUser });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ response: !!!err.message });
  }
};

module.exports = DashboardCreatedPostHandler;
