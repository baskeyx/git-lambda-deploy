const { mongoose } = require('../connectors/mongoose');

const pack = mongoose.model('Packs', mongoose.Schema({
  id: { type: String, unique : true, required : true },
  chars: { type: Array },
  cost: { type: Number },
  name: { type: String },
  description: { type: String },
}));

exports.pack = pack;