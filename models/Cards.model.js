const { mongoose } = require('../connectors/mongoose');

const card = mongoose.model('Card', mongoose.Schema({
  id: { type: String, unique : true },
  charId: { type: Number },
  userId: { type: String }, 
  name: { type: String, required : true },
  stats: {
    dur: { type: Number },
    ene: { type: Number },
    fig: { type: Number },
    int: { type: Number },
    spe: { type: Number },
    str: { type: Number },
  },
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 0 },
  time : { type : Number, default: Date.now() },
}));

exports.card = card;
