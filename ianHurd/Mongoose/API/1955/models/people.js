var mongoose = require('mongoose');

var BoomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
  }
}, {timestamps: true });

var Boomer = mongoose.model('Boomer', BoomerSchema);
module.exports = Boomer;
