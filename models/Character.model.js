const { mongoose } = require('../connectors/mongoose');

const character = mongoose.model('Characters', mongoose.Schema({
  id: { type: Number, unique : true, required : true },
  name: { type: String, required : true },
  type: { type: String, required : true, enum: ['hero', 'villain', 'both'] },
  colour: { type: String, required : true, enum: ['green', 'purple', 'cyan', 'red', 'blue', 'orange', 'yellow', 'grey'] },
  stats: {
    dur: { type: Number },
    ene: { type: Number },
    fig: { type: Number },
    int: { type: Number },
    spe: { type: Number },
    str: { type: Number },
  },
  time : { type : Number, default: Date.now() },
  total: { type: Number }
}));

exports.character = character;
