const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
require('dotenv').config();

const characterRoutes = require('./routes/characters');

const app = express();
app.use(cors());

const port = 8000;
const { ENVIRONMENT } = process.env;

app.use('/api/characters', characterRoutes);

if (ENVIRONMENT !== 'DEV') {
  module.exports.handler = serverless(app);
} else {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}