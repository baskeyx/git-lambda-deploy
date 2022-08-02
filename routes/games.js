const express = require('express');
const { game } = require('../models/Game.model.js');
//const { user } = require('../models/User.model.js');
const router = express.Router();
const getCharacterById = require('../functions/getCharacterById');
const getId = require('../functions/getId');

router.post('/', async (req, res) => {
  const { userId, eventId, charId } = req.params;
  const gameId = getId();
  const userResponse = await user.find({ id: userId });

  const { id, coins, characters, intro } = userResponse[0];
  res.send({id, coins, characters, intro});
});

module.exports = router;