const rescue = require('express-rescue');
const Boom = require('@hapi/boom');

const { UsersService } = require('../services');

const CREATED = 201;

const registerNewUser = rescue(async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = await UsersService.registerNewUser(name, email, password);

  if (newUser.error) {
    throw Boom.conflict(newUser.message);
  }

  res
    .status(CREATED)
    .json(newUser);
});

const createAdmin = rescue(async (req, res) => {
  const { name, email, password } = req.body;
  const { role } = req.user.data;

  const userAdmin = await UsersService.createAdmin(name, email, password, role);
  
  if (userAdmin.error) throw Boom.forbidden(userAdmin.message);

  res
    .status(CREATED)
    .json(userAdmin);
});

module.exports = {
  registerNewUser,
  createAdmin,
};
