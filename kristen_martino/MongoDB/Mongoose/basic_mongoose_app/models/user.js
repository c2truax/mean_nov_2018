const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema(
		{
			name: {type: String, default: ''},
			age: {type: Number, default: ''}
		},
		{timestamps: true}
);

let User = mongoose.model('User', UserSchema);

module.exports = User;