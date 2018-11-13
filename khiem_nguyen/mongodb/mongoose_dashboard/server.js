var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var path = require('path');
var session = require('express-session');
app.use(session({
  secret: 'thisisasecret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
var flash = require('express-flash');
app.use(flash());

var mongoose = require('mongoose');
var validate = require('mongoose-validator');
mongoose.connect('mongodb://localhost/mongoose_dashboard');
mongoose.Promise = global.Promise;

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
require('./config/routes.js')(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})
