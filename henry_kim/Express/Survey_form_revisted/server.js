var express    = require('express'),
    // app is going to be how we use express to add routes, find templates, etc.
    app        = express(),
    // path lets us easily combine variables and string to form a file path
    path       = require('path'),
    port       = 8000;
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
const server = app.listen(8000);
const io = require('socket.io')(server);
app.use(bodyParser.urlencoded({extended: true}));

// Tell express where our static files are
app.use(express.static(path.join(__dirname, 'static')));

// Tell express where our views are
app.set(path.join('views', __dirname, 'views'));

// Now lets set the view engine itself so that express knows that we are using
// ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

io.on('connection', function (socket) { //2
  console.log("Connection established")
  //The form information is EMITTED to the server with the event name "posting_form"
  //socket.on is receiving
  socket.on('posting_form', function (data) {
    console.log("*********", data); //8 (note: this log will be on your server's terminal)
    //should send the "updated_message" and tell the client to display "updated_message"
    socket.emit('updated_message', {msg: data});
    //no need to import Math library; needs to be capitalized
    socket.emit('random_number', {msg: Math.floor(Math.random()*1000)});
  });
});


// We create this file, it contains all of our routes. Think urls.py in Django
// and routes.rb in ruby.
app.get("/", function (request, response){
  response.render('index');
});
