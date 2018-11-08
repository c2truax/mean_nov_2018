var express = require("express");

var session = require('express-session')

var path = require("path");

var app = express();
var bodyParser = require('body-parser');

app.use(session({
  secret: 'ninjakitteh',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60000
  }
}));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, "./node_modules/bootstrap/dist/")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
  if (request.session.name) {
    request.session.name = undefined;
  }
  if (request.session.language) {
    request.session.language = undefined;
  }
  if (request.session.location) {
    request.session.location = undefined;
  }
  if (request.session.comment) {
    request.session.comment = undefined;
  }
  response.render("index");
});

app.post('/', function (request, response) {
  request.session.name = request.body.name;
  request.session.location = request.body.location;
  request.session.language = request.body.language;
  request.session.comment = request.body.comment;
  response.redirect('/result');
});

app.get('/result', function (request, response) {
  response.render("result", {
    'name': request.session.name,
    'location': request.session.location,
    'language': request.session.language,
    'comment': request.session.comment
  });
});

app.listen(6789, function () {
  console.log("listening on port 6789");
});
