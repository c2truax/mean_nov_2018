var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You must provide a name."],
    minlength: [2, "Your name must be at least 2 characters long."]
  },
  content: {
    type: String,
    required: [true, "You forgot to write your comment."],
    minlength: [2, "Your comment is not long enough!"]
  },
}, {timestamps: true });

var Comment = mongoose.model('Comment', CommentSchema);
// var Comment = {schema: CommentSchema, model:CommentModel}; 
module.exports = Comment;
