const { user } = require('../models/user.model.js');
const putUserById = async (id, userDetails) => await user.updateOne({id}, userDetails);
module.exports = putUserById;