const jwt = require('jsonwebtoken');
const Boom = require('@hapi/boom');
require('dotenv').config();

const { IS_LOCAL, TOKEN_SECRET } = process.env;
const secret = (IS_LOCAL)
? TOKEN_SECRET
: 'mySecretToken';

module.exports = (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) return next(Boom.unauthorized('missing auth token'));
  
  try {
    jwt.verify(token, secret, (err, user) => {
      if (err) return next(Boom.unauthorized('jwt malformed'));

      req.user = user;
      next();
    });
  } catch (err) {
    next(err);
  }
};
