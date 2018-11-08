var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {
      type: String,
      minlength: [2,"Your name is NOT a single letter"],
      required: 'First name is required',
    },
}, {timestamps: true });

var User = mongoose.model('User', UserSchema);
module.exports = User;
