var mongoose = require('mongoose');

var PlatypusSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name must be at least 2 characters"],
		minlength: 2,
		default: '',
	},
	age: {
		type: Number,
		required: [true, "Age is required"],
		min: [0, "MUST BE AT LEAST 0"]
	},
}, {timestamps: true});

var Platypus = mongoose.model('Platypus', PlatypusSchema);
module.exports = Platypus;