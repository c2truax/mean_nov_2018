const express = require('express'),
		app = express(),
		path = require('path'),
		bodyParser = require('body-parser'),
		session = require('express-session'),
		flash = require('express-flash'),
		port = 8000;

require('./config/mongoose')

app.use(flash())

app.use(bodyParser.urlencoded({
	extended: true
}));

// Tell express where our static files are
app.use(express.static(path.join(__dirname, './static')));

// Tell express where our views are
app.set('views', path.join(__dirname, './views'));

// Tell express we are using ejs
app.set('view engine', 'ejs');

// This file contains all of our routes (think urls.py in Django)
require('./config/routes')(app);

app.listen(port, function () {
	console.log(`listening on port ${port}`);
});
