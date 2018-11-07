var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
	f_name: {
		type: String,
		trim: true,
		required: [true, 'must include a first name'],
		minlength: [2, 'first name must be at least 2 characters'],
	},
	l_name: {
		type: String,
		trim: true,
		required: [true, 'must include a last name'],
		minlength: [2, 'last name must be at least 2 characters'],
	},
	email: {
		type: String,
		unique: true,
		required: [true, 'must include a valid email'],
		trim: true,
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
	},
	hashPassword: {
		type: String,
		required: [true, 'please submit a password'],
		minlength: [1, '']
	},
	messages: [{ type: Schema.Types.ObjectId, ref: "Message"}],
	},{timestamps: true });
UserSchema.plugin(uniqueValidator, {message: 'email already exists in our database!'});

var User = mongoose.model('User', UserSchema);
module.exports = User