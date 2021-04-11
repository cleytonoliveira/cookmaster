const { UsersModel } = require('../models');

const registerNewUser = async (name, email, password) => {
  const userRegistered = await UsersModel.getAllUsers();

  const emailAlreadyExist = userRegistered.some((user) => user.email === email);

  if (emailAlreadyExist) {
    return {
      error: true,
      message: 'Email already registered',
    };
  }

  return UsersModel
    .registerNewUser(name, email, password);
};

const createAdmin = async (name, email, password) => UsersModel.createAdmin(name, email, password);

module.exports = {
  registerNewUser,
  createAdmin,
};
