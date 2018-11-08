var mongoose = require('mongoose');

var NifflerSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '', 
    required: true, 
    minlength: 2
  },
  color: {
    type: String,
    default: '',
    required: true, 
    minlength: 3
  }
}, {timestamps: true });

var Niffler = mongoose.model('Niffler', NifflerSchema);
module.exports = Niffler;
