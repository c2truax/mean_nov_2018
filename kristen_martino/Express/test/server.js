// jshint esversion:6
const express = require('express'),
  app = express(),
  path = require('path'),
  bodyParser = require('body-parser'),
  axios = require('axios'),
  server = app.listen(1337),
  io = require('socket.io')(server);
let counter = 0;

io.on('connection', function (socket) { //2

  socket.emit('greeting', {
    msg: 'Greetings, from server Node, brought to you by Sockets! -Server'
  }); //3
  socket.on('thankyou', function (data) { //7
    console.log(data.msg); //8 (note: this log will be on your server's terminal)
  });

});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/cars', function (request, response) {
  response.render('cars');
});

app.get('/cats', function (request, response) {
  response.render('cats');
});

app.get('/cars/new', function (request, response) {
  response.render('form');
});

app.get('/users/:id', function (req, res) {
  console.log('The user id requested is:', req.params.id);
  // just to illustrate that req.params is usable here:
  res.send('You requested the user with id: ' + req.params.id);
  // code to get user from db goes here, etc...
});
app.get('/people', function (req, res) {
  // use the axios .get() method - provide a url and chain the .then() and .catch() methods
  axios.get(url)
    .then(data => {
      // log the data before moving on! 
      console.log(data);
      // rather than rendering, just send back the json data!
      res.json(data);
    })
    .catch(error => {
      // log the error before moving on!
      console.log(error);
      res.json(error);
    });
});

// app.listen(8000, function () {
//   console.log('listening on 8000');
// });
