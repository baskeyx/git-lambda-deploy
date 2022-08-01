const express = require('express');
const { event } = require('../models/Event.model.js');
const router = express.Router();

router.get('/', async (req, res) => {
  const query = await event.find();
  const events = [];
  query.forEach((e) => {
    const { id, name, description, characters, enemies } = e;
    events.push({
      name,
      id,
      description,
      characters,
      enemies,
    })
  })
  res.send(events);
});

router.get('/:eventId', async (req, res) => {
  const { eventId } = req.params;
  const query = await event.find({ id: eventId });
  const { id, name, description, characters, enemies, dialog } = query[0];
  const eventResponse = {
    name,
    id,
    description,
    characters,
    enemies,
    dialog,
  }
  res.send(eventResponse);
});

module.exports = router;

// const query = await event.create({
//   id: 6527,
//   name: 'The Amazing Spider-Man (1963) #14',
//   description: 'The first major battle between Spidey and his archnemesis, the Green Goblin!',
//   characters: [1011010],
//   enemies: [1011435],
//   dialog: [{
//     character: '<player1>',
//     copy: 'Hold it, fella!!'
//   },
//   {
//     character: '<player1>',
//     copy: 'How about giving a guy a lift?',
//   },
//   {
//     character: '1011435',
//     copy: 'Spider-Man!! I’ve been waiting for you!!'
//   },
//   {
//     character: '1011435',
//     copy: 'I knew if I flew around the city, you’d be sure to investigate sooner or later!',
//   },
//   {
//     character: '<player1>',
//     copy: 'The Green Goblin!!'
//   },
//   {
//     character: '1011435',
//     copy: 'Why don’t you quit now, Spider-Man, and save us both a lot of trouble?!!'
//   },
//   {
//     character: '<player1>',
//     copy: 'I don’t think so Gobby!!',
//   }],
// })