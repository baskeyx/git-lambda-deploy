const { mongoose } = require('../connectors/mongoose');

const game = mongoose.model('Games', mongoose.Schema({
  id: { type: String, unique : true, required : true },
  userId: { type: String, required : true },
  eventId: { type: String, required : true },
  players: { type: Array },
  completed: { type: Boolean, default: false },
  time : { type : Number, default: Date.now() },
  output: { type: String },
}));

exports.game = game;