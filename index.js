const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const session = require('express-session');
require('dotenv').config();
const { sessionStore } = require('./connectors/mongoose');

const port = 8000;
const { ENVIRONMENT, SESSIONSECRET } = process.env;

const characterRoutes = require('./routes/characters');
const eventRoutes = require('./routes/events');
const userRoutes = require('./routes/users');
const cardRoutes = require('./routes/cards');

const app = express();
app.use(cors({credentials: true, origin: (ENVIRONMENT === 'DEV' ? 'http://localhost:3000': 'https://www.infinitywars.co.uk/') }));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
  secret: SESSIONSECRET,
  saveUninitialized: false,
  store: sessionStore,
  cookie: { maxAge: oneDay },
  resave: false,
}));

app.use('/api/characters', characterRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cards', cardRoutes);

if (ENVIRONMENT !== 'DEV') {
  module.exports.handler = serverless(app);
} else {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}