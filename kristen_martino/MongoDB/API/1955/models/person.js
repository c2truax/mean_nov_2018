const mongoose = require('mongoose');

let PersonSchema = new mongoose.Schema({
	name: {type: String, required: [true, 'Need a name']},
}, {timestamps: true});
mongoose.model('Person', PersonSchema);

module.exports = mongoose.model('Person');
