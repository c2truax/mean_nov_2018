var mongoose = require('mongoose');

var PeopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
  }
}, {timestamps: true });

var People = mongoose.model('People', PeopleSchema);
module.exports = People;
