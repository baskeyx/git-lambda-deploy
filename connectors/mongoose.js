const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');

require('dotenv').config();

const { MONGOURI } = process.env;

const client = mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(m => m.connection.getClient());;

const sessionStore = MongoStore.create({
  clientPromise: client,
  dbName: "infinitywars",
  stringify: false,
  autoRemove: 'interval',
  autoRemoveInterval: 1
});

module.exports = { mongoose, sessionStore };
