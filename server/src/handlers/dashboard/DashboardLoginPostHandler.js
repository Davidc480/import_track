const DashboardLoginPostController = require("../../controllers/dashboard/DashboardLoginPostController");

const DashboardLoginPostHandler = async (req, res) => {
  try {
    const { user, password } = req.body;

    console.log(password);

    const loginBdd = await DashboardLoginPostController(user, password);

    res.status(200).json(loginBdd);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = DashboardLoginPostHandler;
