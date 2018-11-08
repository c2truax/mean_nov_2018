var mongoose = require('mongoose');
var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};
var uniqueValidator = require('mongoose-unique-validator');
var validator = require('validator');
var moment = require('moment');
var datetime = new Date();
var validateBirthday = function(birthday){
  return moment(birthday).isBefore(datetime);
}
console.log(datetime);

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
  first_name: {
      type: String,
      minlength: [2,"Your name is NOT a single letter"],
      required: 'First name is required',
    },
  last_name: {
      type: String,
      minlength: [2,"Your name is NOT a single letter"],
      required: 'Last name is required',
    },
  password: {
      type: String,
      minlength: [8,"Your password must be 8 or more characters"],
      required: 'Password is required',
    },
  birthday:{
    type: String,
    required: 'Birthday is required',
    validate: [validateBirthday, "Birthday incorrect"]
  },
}, {timestamps: true });
UserSchema.plugin(uniqueValidator, { message: 'Email already in use!' });
var User = mongoose.model('User', UserSchema);
module.exports = User;
