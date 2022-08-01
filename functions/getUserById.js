const { user } = require('../models/user.model.js');

const getUserById = async (id) => {
  const userResponse = await user.find({ id });
  // check whether user exists;
  return userResponse[0];
}

module.exports = getUserById;