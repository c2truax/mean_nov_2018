const mongoose = require('mongoose');

let TaskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Title is required'],
	},
	description: {
		type: String,
		default: '',
	},
	completed: {
		type: Boolean,
		default: false,
	}
}, {timestamps: true});


let Task = mongoose.model('Task', TaskSchema);
module.exports = Task;