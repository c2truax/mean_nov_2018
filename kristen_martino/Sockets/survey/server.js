// jshint esversion:6
const express = require('express'),
  app = express(),
  path = require('path'),
  bodyParser = require('body-parser'),
  axios = require('axios'),
  server = app.listen(1337),
  io = require('socket.io')(server);

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

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/', function (request, response) {
  response.render('index');
});

io.sockets.on('connection', (socket) => {
  console.log("\n=> Client/socket is connected!");
  console.log("=> Client/socket id is: ", socket.id);

  socket.on('posting_form', (data) => {
    console.log(data);
    var random_number = Math.floor(Math.random() * 1000) + 1;
    var form_data = {
      "name": data.name,
      "location": data.location,
      "language": data.language,
      "comment": data.comment
    };
    socket.emit('updated_message', form_data);
    socket.emit('random_number', {random_number: random_number});
  });

  // socket.on('disconnect', () => {
  //   console.log(':> Client disconnected');
  // });
});

// app.listen(8000, function () {
//   console.log('listening on 8000');
// });
