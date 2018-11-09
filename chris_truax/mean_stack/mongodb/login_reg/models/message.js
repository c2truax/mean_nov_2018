var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You must provide a name."],
    minlength: [2, "Your name must be at least 2 characters long."]
  },
  content: {
    type: String,
    required: [true, "You forgot to write your message."],
    minlength: [2, "Your message is not long enough!"]
  },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, {timestamps: true });

var Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
