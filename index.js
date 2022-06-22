var ascii = require('ascii-faces');

exports.handler = async (event) => {
  // TODO implement
  const response = {
      statusCode: 200,
      body: JSON.stringify(ascii()),
  };
  return response;
};