const { user } = require('../models/User.model.js');

const createUserWithId = async (id) => await user.create({ id });

const getUserById = async (id) => {
  const userResponse = await user.find({ id });
  return userResponse[0];
}

const putUserById = async (id, userDetails) => await user.updateOne({id}, userDetails);

module.exports = { getUserById, putUserById, createUserWithId };