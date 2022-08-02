const { mongoose } = require('../connectors/mongoose');

const user = mongoose.model('Users', mongoose.Schema({
  id: { type: String, unique : true, required : true },
  coins: { type: Number, default: 1 },
  access: { type: Boolean, default: true },
  active: { type: Boolean, default: true },
  intro: { type: Boolean, default: true },
  time : { type : Number, default: Date.now() },
  events: { type: Array, default: [] },
  email: { type: String, default: '' },
}));

exports.user = user;