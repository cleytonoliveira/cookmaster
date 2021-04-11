const rescue = require('express-rescue');
const { LoginService } = require('../services');

const SUCCESS = 200;

const userLogin = rescue(async (req, res) => {
  const { email } = req.body;

  const generateToken = await LoginService.userLogin(email);

  return res
    .status(SUCCESS)
    .json({ token: generateToken });
});

module.exports = {
  userLogin,
};
