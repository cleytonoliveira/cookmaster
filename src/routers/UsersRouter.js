const { Router } = require('express');
const { UsersController } = require('../controllers');
const { validateUserFields, authorization } = require('../middlewares');

const UserRouter = Router();

UserRouter.post('/',
  validateUserFields,
  UsersController.registerNewUser);
UserRouter.post('/admin',
  authorization,
  UsersController.createAdmin);

module.exports = UserRouter;
