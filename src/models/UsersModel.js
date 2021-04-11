const connection = require('./connection');

const registerNewUser = async (name, email, password) => {
  const { insertedId } = await connection()
  .then((db) => db.collection('users')
    .insertOne({ name, email, password, role: 'user' }));
  
  return {
    user: {
      name,
      email,
      role: 'user',
      _id: insertedId,
    },
  };
};

const getAllUsers = async () => connection()
  .then((db) => db.collection('users')
    .find().toArray());

const createAdmin = async (name, email, password) => {
  const { insertedId } = await connection()
  .then((db) => db.collection('users')
    .insertOne({ name, email, password, role: 'admin' }));

  return {
    user: {
      name,
      email,
      role: 'admin',
      _id: insertedId,
    },
  };
};

module.exports = {
  registerNewUser,
  getAllUsers,
  createAdmin,
};
