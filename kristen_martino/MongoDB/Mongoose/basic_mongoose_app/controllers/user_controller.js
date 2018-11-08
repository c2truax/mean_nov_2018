const User = require('../models/user');

module.exports = {

	// This is where we will retrieve the users from the database and include them in the view page we will be rendering
	users: function (req, res) {
		User.find({}, function (err, users) {
			if (err) {
				res.redirect('/users');
			} else {
				res.render('index', {all_users: users});
			}
		});
	},

	add: function (req, res) {
		console.log("POST DATA", req.body);

		// create a new User with the name and age corresponding to those from req.body
		let user = new User({name: req.body.name, age: req.body.age});

		// Try to save that new user to the database (this is the method that actually inserts into the db)
		// and run a callback function with an error (if any) from the operation.
		user.save(function (err) {
			if (err) {
				console.log('something went wrong');
			} else {
				console.log('successfully added a user!');
				res.redirect('/users');
			}
		});
	}
};
