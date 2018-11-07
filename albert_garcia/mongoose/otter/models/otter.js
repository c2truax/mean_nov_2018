
var mongoose = require('mongoose');

var OtterSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
    required: true,
    minlength: 2,
  },
  age: {
    type: Number,
    default: '',
    required: true,
  },
  gender: {
    type: String,
    default: '',
    required: true,
  },
}, {timestamps: true });

var Otter = mongoose.model('Otter', OtterSchema);
module.exports = Otter;