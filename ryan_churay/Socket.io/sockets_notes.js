// SERVER.JS FILE
const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;

io.on('connection', function (socket) { //2

  socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
  socket.on('thankyou', function (data) { //7
    console.log(data.msg); //8 (note: this log will be on your server's terminal)
  });

});


// CLIENT'S INDEX.HTML
<html>
<head>
    <title>Sockets</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="/socket.io/socket.io.js"></script>
    <script type ="text/javascript">
        $(document).ready(function (){

            var socket = io(); //1

            socket.on('greeting', function (data) { //4
                console.log(data.msg); //5
                socket.emit('thankyou', { msg: 'Thank you for connecting me! -Client' }); //6
            });
         })
    </script>
</head>
<body>
    <h1>Fun with sockets</h1>
</body>
</html>


If you're having some trouble following the flow of information, use the commented numbers above and reference the following:

1- initially the client will request a web page from the server by connecting to our server via our port "localhost:1337". The server then sends back the index.html file as shown above. The script will run on the client's browser and connect to our server via sockets.
2- This triggers our server's connection listener to run, and this occurs for every new socket connection.
3- Then the server will emit a message 'greeting' to the client, because we placed an emit event there.
4- The client's 'greeting' listener will then be triggered...
5- ...and log the data sent via the message on our browser's console.
6- Finally the client will emit a 'thank you' message to the server because we included this emit within the callback of our 'greeting' listener.
7- The server's listener with the matching 'thank you' label will be triggered...
8- ...and invoke its callback.
