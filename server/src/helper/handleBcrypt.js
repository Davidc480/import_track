const bcrypt = require("bcryptjs");

const encrypt = async password => {
  const passwordHash = await bcrypt.hash(password, 8);
  return passwordHash;
};

const compare = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword);
};

module.exports = { encrypt, compare };
