var mongoose = require('mongoose');

var GoldSchema = new mongoose.Schema({
  gold: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
    default: '',
  }
}, {timestamps: true });

var Gold = mongoose.model('Gold', GoldSchema);
module.exports = Gold;
