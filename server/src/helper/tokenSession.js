const jwt = require("jsonwebtoken");

const tokenLogin = async user => {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
};

module.exports = { tokenLogin };
