var bodyParser = require('body-parser');
var express = require('express'),
  app = express(),
  server  = require("http").createServer(app),
  io = require("socket.io")(server),
  session = require("express-session")({
    secret: "my-secret",
    resave: true,
    saveUninitialized: true
  }),
  sharedsession = require("express-socket.io-session");
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.use(session)
io.use(sharedsession(session, {
    autoSave:true
}));
var player1 = false;
var player2 = false;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
io.on('connection', function (socket) {
  console.log('Connection established');
  socket.on('movePiece', function (data){
    io.emit('clientMove', {piece: data.piece, moveX: data.moveX, moveY: data.moveY, player: socket.handshake.session.playerNumber});
  });
  socket.on('playerJoin',function(data){
    console.log('player joined');
    socket.handshake.session.playerNumber = data.num;
    socket.handshake.session.save();
    console.log(socket.handshake.session.playerNumber);
    if(data.num == 1){
      player1 = true;
    }
    else{
      player2 = true;
    }
    io.emit('hideButton', {num:data.num});
  });
  socket.on('playerLeave',function(){
    console.log('Player left');
    let temp = socket.handshake.session.playerNumber;
    delete socket.handshake.session.playerNumber;
    socket.handshake.session.save();
    if (temp == 1){
      player1 = false;
    }
    else{
      player2 = false;
    }
    io.emit('buttonReset', {num: temp})
    temp = 0;
  })
});

app.get('/', function(request, response) {
  console.log(player1);
  if (!request.session.playerNumber){
    request.session.playerNumber = 0;
  }
  console.log(request.session.playerNumber)
  response.render('index',{testp1: player1, testp2: player2, playerNum: request.session.playerNumber});
})
server.listen(8000);
