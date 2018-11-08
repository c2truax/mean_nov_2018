var User = require('../models/user');
var Message = require('../models/message');
var Comment = require('../models/comment');
var bcrypt = require('bcryptjs');
var flash = require('express-flash');

module.exports = {
	index: function (req, res) {
		res.render('login');
	},
	login: function (req, res) {
		if (!req.body.password || !req.body.email) {
			req.flash('login', 'please enter proper login credentials');
			res.redirect('/');
		} else {
			User.findOne({email: req.body.email}, (err, user) => {
				if (user) {
					console.log(user);
					bcrypt.compare(req.body.password, user.hashPassword)
							.then(result => {
								if (result) {
									req.session.user_id = user._id;
									res.redirect('/wall');
								} else {
									req.flash('login', 'invalid password');
									res.redirect('/');
								}
							}).catch(err => {
						console.log(err.message);
						res.redirect('/');
					});
				} else {
					req.flash('login', 'email does not exist in our database');
					res.redirect('/');
				}
			}).catch(err => {
				console.log(err.message);
				res.redirect('/');
			})
		}
	},
	register: function (req, res) {
		//write password validation code here
		var password = req.body.password;
		var passConfirm = req.body.password_confirm;

		if (password != passConfirm) {
			req.flash('registration', 'passwords do not match');
		}
		if (!password.match(/.*[a-z]/)) {
			req.flash('registration', 'password must contain a lower case character');
		}
		if (!password.match(/.*[A-Z]/)) {
			req.flash('registration', 'password must contain an upper case character');
		}
		if (!password.match(/.*[0-9]/)) {
			req.flash('registration', 'password must contain a number');
		}
		if (!password.match(/.*[!@#\$%\^&\*]/)) {
			req.flash('registration', 'password must contain a special character (!@#$%^&*)');
		}
		if (!password.match(/.{8,}/)) {
			req.flash('registration', 'password must be at least eight characters long');
		}
		if (req.session.flash) {
			if (req.session.flash.registration) {
				console.log('invalid password');
				return res.redirect('/')
			}
		}
		bcrypt.hash(req.body.password, 10)
				.then((hashPass) => {
					var user = new User({
						f_name: req.body.first_name,
						l_name: req.body.last_name,
						email: req.body.email,
						hashPassword: hashPass
					})
					user.save(function (err) {
						// if there is an error console.log that something went wrong!
						if (err) {
							console.log('something went wrong', err);
							for (var key in err.errors) {
								req.flash('registration', err.errors[key].message);
							}
							res.redirect('/');
						} else { // else console.log that we did well and then redirect to the root route
							console.log('successfully added a user!');
							console.log(user);
							req.session.user_id = user._id;
							res.redirect('/wall');
						}
					});
				})
				.catch(err => {
					console.log(err.message);
				});

	},
	wall: function (req, res) {
		console.log('session id: ' + req.session.user_id);
		User.findById(req.session.user_id, (err, user) => {
			Message.find({})
					.populate('author')
					.exec((err, messages) => {
								if (err) {
									console.log("Something not right");
									console.log(err.message);
									res.render('success');
								} else {
									console.log("Rendering Wall");
									console.log(user);
									res.render('success', {user: user, messages: messages});
								}
							}
					);
		});
	},
}
