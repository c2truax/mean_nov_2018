var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('./config/mongoose');
var path = require('path');
var session = require('express-session');
var flash = require('express-flash');
var validate = require('mongoose-validator');

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: 'thisisasecret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use(flash());
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
require('./config/routes.js')(app)



mongoose.Promise = global.Promise;

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



app.listen(8000, function() {
    console.log("listening on port 8000");
})
