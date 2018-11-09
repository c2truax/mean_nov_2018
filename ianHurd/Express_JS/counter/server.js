
var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
var session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000 }
}))
app.set('view engine', 'ejs');
app.get('/', function(request, response) {
  if (!request.session.count){
    request.session.count = 0;
  }
  request.session.count += 1;
  console.log(request.session.count);
  response.render('index', {count:request.session.count});

})

app.get('/add', function(request, response) {
  request.session.count += 1;
  response.redirect('/');
})

app.get('/reset', function(request, response) {
  request.session.count = 0;
  response.redirect('/');
})
app.listen(8000, function() {
  console.log("listening on port 8000");
})
