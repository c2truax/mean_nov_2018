var Platypodes = require('../models/platypus');

module.exports = {
	create_platypus: function (req, res) {
		console.log("POST DATA", req.body);
		let platypus = new Platypodes({name: req.body.name, age: req.body.age});
		// Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
		platypus.save(function (err) {
			// if there is an error console.log that something went wrong!
			if (err) {
				console.log('something went wrong', err);
				for (var key in err.errors) {
					req.flash('new_platypus', err.errors[key].message);
				}
				res.redirect('/platypodes/new');
			} else { // else console.log that we did well and then redirect to the root route
				console.log('successfully added a platypus!');
				console.log(platypus.name, ",", platypus.age);
				res.redirect('/');
			}
		});
	},
	display: function (req, res) {
		Platypodes.find({}, function (err, platypodes) {
			res.render('display', {platypodes: platypodes});
		});
	},
	profile: function (req, res) {
		Platypodes.find({_id: req.params.id}, function (err, platypus) {
			res.render('profile', {platypus: platypus});
		});
	},
	new: function (req, res) {
		res.render('new_platypus');
	},
	edit: function (req, res) {
		Platypodes.findOne({_id: req.params.id}, function (err, platypus) {
			console.log(req.params.id);
			res.render('edit', {platypus: platypus});
		})
	},
	update_platypus: function (req, res) {
		console.log(req.params.id);
		Platypodes.findOneAndUpdate({_id: req.params.id}, {
			$set: {
				name: req.body.name,
				age: req.body.age
			}
		}, {runValidators: true}, function (err, platypus) {
			if (err) {
				console.log('something went wrong', err);
				for (var key in err.errors) {
					req.flash('edit_platypus', err.errors[key].message);
				}
				res.redirect(`/platypodes/edit/${req.params.id}`);
			} else { // else console.log that we did well and then redirect to the root route
				console.log('successfully updated a platypus!');
				console.log(platypus.name, ",", platypus.age);
				res.redirect('/');
			}
		});
	},
	destroy: function (req, res) {
		Platypodes.deleteOne({_id: req.params.id}, function (err) {
			if (err) {
				console.log(err.message);
			} else {
				console.log(req.params.id);
			}
			res.redirect('/');
		});
	}
}