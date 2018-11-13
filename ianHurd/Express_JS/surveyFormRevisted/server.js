
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

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
io.on('connection', function (socket) {
  console.log('IM CONNECTED')
  socket.on('posting_form', function (data){
    console.log('I GOT THE FORM, ITS:',data);
    socket.emit('updated_message', {msg: data});
    socket.emit('random_number', {msg: Math.floor(Math.random()*1000)});
  });
});
app.get('/', function(request, response) {
  response.render('index');

})

app.get('/result', function(request, response) {
  response.render('result', {info:request.session.info});
})

app.post('/process', function(request, response) {
  request.session.info = request.body;
  response.redirect('/result');
})
