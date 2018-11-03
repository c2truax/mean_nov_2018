// require is similar to import in Python
// express is a framework that we will import.
var color = "green";
var session = require('express-session');
var express    = require('express'),
    // app is going to be how we use express to add routes, find templates, etc.
    app        = express(),
    // path lets us easily combine variables and string to form a file path
    path       = require('path'),
    port       = 8000;

// Tell express where our static files are
app.use(express.static(path.join(__dirname, 'static')));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
const server = app.listen(1337);
const io = require('socket.io')(server);
io.on('connection', function (socket) { 
  
    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server', color: color});
    socket.on('thankyou', function (data) {
        console.log(data.msg); 
    });
    socket.on('green_click', function () { 
        color = "green";
        io.emit('green', { color: color });
    });
    socket.on('blue_click', function () { 
        color = "blue";
        io.emit('blue', { color: color });
    });
    socket.on('pink_click', function () { 
        color = "pink";
        io.emit('pink', { color: color });
    });
});
// Tell express where our views are
app.set(path.join('views', __dirname, 'views'));

// Now lets set the view engine itself so that express knows that we are using
// ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
app.use(function(req, res, next) {
    res.locals.count = req.session.count;
    next();
});
// We create this file, it contains all of our routes. Think urls.py in Django
// and routes.rb in ruby.
require('./config/routes.js')(app);


app.listen(port, function() {
    console.log(`listening on port ${port}`);
})
