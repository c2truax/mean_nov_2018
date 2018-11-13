var mongoose = require('mongoose');
var comment = require('../models/comment');

var MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  content: {
    type: String,
    required: true,
    maxlength: 255,
  },
  comments: [comment.schema],
}, {timestamps: true });

var Message = mongoose.model('Message', MessageSchema);
module.exports = Message;