
var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  title: {
      type: String,
      minlength: [2,"Title must be at least 2 characters"],
      required: 'title is required',
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