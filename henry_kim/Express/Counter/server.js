// require is similar to import in Python
// express is a framework that we will import.
var session = require('express-session');
var express    = require('express'),
    // app is going to be how we use express to add routes, find templates, etc.
    app        = express(),
    // path lets us easily combine variables and string to form a file path
    path       = require('path'),
    port       = 8000;

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

// Tell express where our static files are
app.use(express.static(path.join(__dirname, 'static')));

// Tell express where our views are
app.set(path.join('views', __dirname, 'views'));

// Now lets set the view engine itself so that express knows that we are using
// ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// We create this file, it contains all of our routes. Think urls.py in Django
// and routes.rb in ruby.
app.get("/", function (request, response){
  //just like python if request.session not in use etc
  if(!request.session.count) {
    request.session.count = 0;
  }
  //increment the session by 1 each time visisted
  request.session.count +=1;
  response.render('index', {count:request.session.count});
})

app.get('/add', function (request, response){
    request.session.count+=1;
    // redirect the user back to the root route.
    response.redirect('/');
});

app.get('/reset', function (request, response){
    request.session.count = 0;
    // redirect the user back to the root route.
    response.redirect('/');
});



app.listen(port, function() {
    console.log(`listening on port ${port}`);
})
