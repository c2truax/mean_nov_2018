
var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000 }
}))
var count = 0;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
io.on('connection', function (socket) {

  console.log('Connection established');
  socket.on('green', function() {
    color = 'green';
    io.emit('button_push', {color: color});
  });
  socket.on('blue', function() {
    color = 'blue';
    io.emit('button_push', {color: color});
  })
  socket.on('pink', function() {
    color = 'pink';
    io.emit('button_push', {color: color});
  })
});


app.get('/', function(request, response) {

  response.render('index', {num: count});
})

app.get('/result', function(request, response) {
  response.render('result', {info:request.session.info});
})

app.post('/process', function(request, response) {
  request.session.info = request.body;
  response.redirect('/result');
})
