const { mongoose } = require('../connectors/mongoose');

const event = mongoose.model('Events', mongoose.Schema({
  id: { type: Number, unique : true, required : true },
  name: { type: String, required : true },
  description: { type: String, required: true },
  characters: { type: Array, required: true },
  enemies: { type: Array, required: true },
  dialog: { type: Array, required: true },
  time : { type : Number, default: Date.now() },
}));

exports.event = event;
