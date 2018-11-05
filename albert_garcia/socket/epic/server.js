var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var session = require('express-session');

var app = express();

var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));

// more new code:
app.use(session({
  secret: 'keepitsecret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000 }
}))

// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
var counter = 0;

var server = app.listen(1337);
var io = require('socket.io')(server);

io.on('connection', function (socket) { //2
  
    socket.on('add', function (data) { //7
        counter += data;
        socket.broadcast.emit('updated_counter', counter); //3
        socket.emit('updated_counter', counter);
    });
    socket.on('reset', function(data) {
        counter = data;
        socket.broadcast.emit('reset_counter', counter);
        socket.emit('reset_counter', counter);
    });

});

// We create this file, it contains all of our routes. Think urls.py in Django
// and routes.rb in ruby.
require('./config/routes.js')(app);

// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log(`listening on port 8000`);
});