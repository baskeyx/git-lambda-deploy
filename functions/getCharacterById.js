const { character } = require('../models/Character.model.js');
const getRandomStats = require('./getRandomStats');

const getCharacterById = async (charId) => {
  const query = await character.find({ id: charId });
  const { name, colour, stats, id } = query[0];
  const characterResponse = {
    name,
    colour,
    id,
    stats: getRandomStats(stats),
  }
  return characterResponse;
}

module.exports = getCharacterById;