var User = require('../models/user');
var Message = require('../models/message');
var Comment = require('../models/comment');
var flash = require('express-flash');

module.exports = {
	create_message: function (req, res) {
		var message = new Message({content: req.body.content, author: req.session.user_id})
		message.save(function (err) {
			if (err) {
				console.log('something went wrong', err);
				for (var key in err.errors) {
					req.flash('wall', err.errors[key].message);
				}
				res.redirect('/wall');
			} else {
				console.log('successfully posted a message!');
				console.log(message);
				res.redirect('/wall');
			}
		});
	},


}