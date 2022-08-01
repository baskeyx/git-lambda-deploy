const { v4: uuidv4 } = require('uuid');

const getId = () => uuidv4();

module.exports = getId;