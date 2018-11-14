
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "email entered is not of a valid form"]
  },
  password: {
    type: String,
    required: true,
  },
  gold: {
    type: Number,
    default: 0,
  },
  activity: [{type: String}],
}, {timestamps: true });

var User = mongoose.model('User', UserSchema);
module.exports = User;