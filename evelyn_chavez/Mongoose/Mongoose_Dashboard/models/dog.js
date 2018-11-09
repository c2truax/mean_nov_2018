var mongoose = require('mongoose');

var DogSchema = new mongoose.Schema({
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
  	minlength: 2
  },

}, {timestamps: true });

var Dog = mongoose.model('Dog', DogSchema);
module.exports = Dog;
