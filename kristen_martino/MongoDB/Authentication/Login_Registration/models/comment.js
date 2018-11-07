var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
	content: {
		type: String,
		trim: true,
		required: [true, 'Content cannot be blank'],
	},
	author: {
		type: String,
		trim: true,
		required: true,
	},
	message: {
		type: Schema.Types.ObjectId,
		ref: "Message"},
}, {timestamps: true });


var Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment