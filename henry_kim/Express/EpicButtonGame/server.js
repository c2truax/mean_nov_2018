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

var counter = 0;
//Server start
io.on('connection', function (socket) {
  console.log('Connection established');


  //when you hear "buton_push" start this code (increment counter)
  //wait to be called from the index
  socket.on('button_push', function () {
    counter++;
    //broadcast it to everyone!
    //check "initated_button" on the index and run the code!
    io.emit("initated_button", {count: counter});
    console.log("Count is at: ", counter);
  });
  socket.on('reset', function() {
    counter = 0;
    //check initated_button on the index and run the code!
    io.emit('initated_button', {count: counter});
    console.log("I have resetted the counter.", counter)
  })
});

app.get('/', function(request, response) {
  response.render('index', {count: counter});
})
