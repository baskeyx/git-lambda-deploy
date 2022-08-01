const express = require('express');
const { user } = require('../models/user.model.js');
const router = express.Router();
const getId = require('../functions/getId');

router.get('/', async (req, res) => {
  const userId = getId();
  const userResponse = await user.create({ id: userId });
  const { id, coins, cards, intro, cardId } = userResponse;
  res.send({id, coins, cards, intro, cardId});
});

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const userResponse = await user.find({ id: userId });
  const { id, coins, cards, intro } = userResponse[0];
  res.send({id, coins, cards, intro});
});

module.exports = router;