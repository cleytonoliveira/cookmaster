const { Router } = require('express');
const { UsersController } = require('../controllers');
const { validateUserFields } = require('../middlewares');

const UserRouter = Router();

UserRouter.post('/',
  validateUserFields,
  UsersController.registerNewUser);
UserRouter.post('/admin', UsersController.createAdmin);

module.exports = UserRouter;
