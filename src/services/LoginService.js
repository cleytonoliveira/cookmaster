const jwt = require('jsonwebtoken');
require('dotenv').config();

const { UsersModel } = require('../models');

const { IS_LOCAL, TOKEN_SECRET } = process.env;
const secret = (IS_LOCAL)
  ? TOKEN_SECRET
  : 'mySecretToken';

const userLogin = async (email) => {
  const { role } = await UsersModel.getUserByEmail(email);

  const user = {
    email,
    role,
  };

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, secret, jwtConfig);

  return token;
};

module.exports = {
  userLogin,
};
