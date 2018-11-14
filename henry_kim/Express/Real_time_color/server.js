// require is similar to import in Python
// express is a framework that we will import.
var express    = require('express'),
    // app is going to be how we use express to add routes, find templates, etc.
    app        = express(),
    // path lets us easily combine variables and string to form a file path
    path       = require('path'),
    port       = 8000;

const server = app.listen(8000);
const io = require('socket.io')(server);

// Tell express where our static files are
app.use(express.static(path.join(__dirname, 'static')));

// Tell express where our views are
app.set(path.join('views', __dirname, 'views'));

// Now lets set the view engine itself so that express knows that we are using
// ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

var color = "green";
//Server start
io.on('connection', function (socket) {
  console.log('Connection established');
  socket.emit("Welcome",{color:color});
  //when you hear respective color button start this code (change color)
  socket.on('green', function () {
    color = "green";
    //broadcast it to everyone! pass the color
    io.emit("bg-color", {color: color});
    console.log("The color is currently ", color);
  });

  socket.on('blue', function () {
    color = "blue";
    //broadcast it to everyone! pass the color
    io.emit("bg-color", {color: color});
    console.log("The color is currently ", color);
  });

  socket.on('pink', function () {
    color = "pink";
    //broadcast it to everyone! pass the color
    io.emit("bg-color", {color: color});
    console.log("The color is currently ", color);
  });

});

app.get('/', function(request, response) {
  response.render('index');
})
