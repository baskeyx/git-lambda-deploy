const express = require('express');
const getCharacterById = require('../functions/getCharacterById');
const getId = require('../functions/getId');
const { putUserById, getUserById } = require('../functions/Users');
const { card } = require('../models/Cards.model.js');
const router = express.Router();

router.post('/intro', async (req, res) => {
  const { userId } = req.body;
  const user = await getUserById(userId);
  let cardResponse = {};
  const query = await getCharacterById(1011010);
  const cardId = getId();
  const cardInfo = {
    id: cardId,
    charId: query.id,
    name: query.name,
    stats: query.stats,
  };
  cardResponse = await card.create(cardInfo);
  user.cards.push(cardId);
  await putUserById(userId, user);
  
  const { id, charId, name, stats } = cardResponse;
  res.send({id, charId, name, stats })
});

module.exports = router;