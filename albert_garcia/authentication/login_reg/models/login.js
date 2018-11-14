
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "first name is required, and must be at least 2 charaters"],
    minlength: 2,
  },
  last_name: {
    type: String,
    required: [true, "last name is required, and must be at least 2 charaters"],
    minlength: 2,
  },
  email: {
    type: String,
    required: [true, "email is required and must be of valid form"],
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "email entered is not of a valid form"]
  },
  dob: {
    type: Date,
    required: [true, "date of birth cannot be blank"],
  },
  password: {
    type: String,
    minlength: [8, "password must be at least 8 characters"],

  }
}, {timestamps: true });

var User = mongoose.model('User', UserSchema);
module.exports = User;