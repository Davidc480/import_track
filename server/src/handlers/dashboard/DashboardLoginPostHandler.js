const DashboardLoginPostController = require("../../controllers/dashboard/DashboardLoginPostController");

const DashboardLoginPostHandler = async (req, res) => {
  try {
    const { username, password } = req.body;

    const loginBdd = await DashboardLoginPostController(username, password);

    res.status(200).json(loginBdd);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = DashboardLoginPostHandler;
