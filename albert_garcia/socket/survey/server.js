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

var server = app.listen(1337);
var io = require('socket.io')(server);

io.on('connection', function (socket) { //2
  
    socket.on('posting_form', function (data) { //7
        console.log(data.msg); //8 (note: this log will be on your server's terminal)
        socket.emit('updated_message', { msg: data }); //3
        socket.emit('random_number', { msg: Math.floor(Math.random() * 101) + 1 }); //3
    });

});

// We create this file, it contains all of our routes. Think urls.py in Django
// and routes.rb in ruby.
require('./config/routes.js')(app);

// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log(`listening on port 8000`);
});




/* <script type ="text/javascript">
$(document).ready(function (){
    
    var socket = io(); //1
    $("form").submit(function(event){
        event.preventDefault();
        msg = [];
        $(".input").each(function(){
            msg.push($(this.val()));
            console.log(msg)
        });
        socket.emit('posting_form', { msg: msg }); //6
        socket.on('random_number', function (data) { //4
            console.log(data.msg); //5
        });
        socket.on('updated_message', function (data) { //4
            console.log(data.msg); //5
        });
    });
}) */