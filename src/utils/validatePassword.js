const { UsersModel } = require('../models');

module.exports = async (email, password) => {
  const userRegistered = await UsersModel.getUserByEmail(email);

  const isValidPassword = userRegistered.password === password;

  return isValidPassword;
};
