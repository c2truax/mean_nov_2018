
var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  comment: {
    type: String,
    required: true,
    maxlength: 255,
  },
}, {timestamps: true });

var Comment = mongoose.model('Comment', CommentSchema);
module.exports = {model: Comment, schema: CommentSchema};