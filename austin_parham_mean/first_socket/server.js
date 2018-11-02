const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;
    
io.on('connection', function (socket) { //2
  
  // socket.on('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
  socket.on('form', function (data) { //7
    console.log(data);
    socket.emit('results', data) //8 (note: this log will be on your server's terminal)
  });
});

app.get('/', function(req,response){
	response.render('index');
})
app.post('/results', function(req,response){
	response.render('results');
})