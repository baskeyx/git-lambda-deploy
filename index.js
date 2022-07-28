const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const app = express();
app.use(cors());
const serverless = require('serverless-http');
const port = 8000;
const { ENVIRONMENT } = process.env;

app.use(express.static(path.resolve('build')))

app.get('/', function (req, res) {
  res.sendFile(path.resolve('build', 'index.html'));
});

app.get('/api', (req, res) => {
  res.send({copy: 'Hello World!'});
});

if (ENVIRONMENT !== 'DEV') {
  module.exports.handler = serverless(app);
} else {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

// var ascii = require('ascii-faces');

// exports.handler = async (event) => {
//   // TODO implement
//   const response = {
//       statusCode: 200,
//       body: JSON.stringify(ascii()),
//   };
//   return response;
// };