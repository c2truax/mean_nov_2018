var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: {
      type: String,
      required: [true, "Not long enough!"],
      minlength: 2,
      default: '',
    },
  first_name: {
      type: String,
      default: '',
    },
  last_name: {
      type: String,
      default: '',
    },
  password: {
      type: String,
      default: '',
    },
  birthday:{
    type: String,
    default: '',
  },
}, {timestamps: true });

var User = mongoose.model('User', UserSchema);
module.exports = User;
