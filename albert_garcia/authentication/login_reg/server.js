var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var session = require('express-session');

var app = express();
var bodyParser = require('body-parser');
var mongoose   = require('./config/mongoose');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));

// more new code:
app.use(session({
  secret: 'keepitsecret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000 }
}))
const flash = require('express-flash');
app.use(flash());

const bcrypt = require('bcryptjs');

// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


// We create this file, it contains all of our routes. Think urls.py in Django
// and routes.rb in ruby.
require('./config/routes.js')(app);

// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log(`listening on port 8000`);
});