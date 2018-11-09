const express = require('express'),
		router = express.Router();

const Person = require('../models/person');

/* GET: all users. */
router.get('/', function (req, res) {
	Person.find({}, function (err, people) {
		res.json({'err': err, 'people': people});
	})
});

/* GET: user. */
router.get('/:name', function (req, res) {
	Person.find({'name': req.params.name}, function (err, person) {
		res.json({'err': err, 'person': person});
	})
});

/* GET: create user. */
router.get('/new/:name', function (req, res) {
	Person.create({'name': req.params.name}, function (err, person) {
		res.json({'err': err, 'person': person});
	});
});

router.get('/thisdoesntexist', function (req, res) {
	console.log(req.body);
	res.json({'err': req.body});
});

module.exports = router;
