var mongoose = require('mongoose');

var DogSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
    required: [true, "Not long enough!"],
    minlength: 2
  },
  age: {
    type: Number,
    default: '',
    required: true,
    minlength: 1
  },
}, {timestamps: true });

var Dog = mongoose.model('Dog', DogSchema);
module.exports = Dog;
