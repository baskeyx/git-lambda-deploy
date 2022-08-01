const express = require('express');
const getCharacterById = require('../functions/getCharacterById');
const getUserById = require('../functions/getUserById');
const getId = require('../functions/getId');
const putUserById = require('../functions/putUserById');
const { card } = require('../models/Cards.model.js');
const router = express.Router();

router.post('/intro', async (req, res) => {
  const { userId } = req.body;
  const user = await getUserById(userId);
  let cardResponse = {};
  if (user.cards.length > 0) {
    // get existing card
    cardResponse = await card.find({ id: user.cards[0] });
    cardResponse = cardResponse[0]; 
  } else {
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
  }
  const { id, charId, name, stats } = cardResponse;
  res.send({id, charId, name, stats })
});

module.exports = router;