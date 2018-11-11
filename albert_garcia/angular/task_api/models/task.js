
var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  title: {
      type: String,
      minlength: [2,"Your name is NOT a single letter"],
      required: 'First name is required',
  },
  description: {
      type: String,
      default: '',
  },
  completed: {
      type: Boolean,
      default: false,
  }
}, {timestamps: true });

var Task = mongoose.model('Task', TaskSchema);
module.exports = Task;