const express = require('express');
const { character } = require('../models/Character.model.js');
const getRandomInt = require('../functions/getRandomInt');
const getRandomStats = require('../functions/getRandomStats');
const getCharacterById = require('../functions/getCharacterById');
const router = express.Router();

router.get('/', async (req, res) => {
  const query = await character.find();
  const response = query[getRandomInt(0, query.length-1 )];
  const { name, colour, stats, id } = response;
  const characterResponse = {
    name,
    colour,
    id,
    stats: getRandomStats(stats),
  }
  res.send(characterResponse);
});

router.get('/:characterId', async (req, res) => {
  const { characterId } = req.params;
  const characterResponse = await getCharacterById(characterId);
  res.send(characterResponse);
});

module.exports = router;