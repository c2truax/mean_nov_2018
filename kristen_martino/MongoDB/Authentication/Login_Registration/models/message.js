var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
	content: {
		type: String,
		trim: true,
		required: [true, 'Content cannot be blank'],
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		trim: true,
		required: true,
	},
	comments: [{ type: Schema.Types.ObjectId, ref: "Comment"}],
}, {timestamps: true });


var Message = mongoose.model('Message', MessageSchema);
module.exports = Message