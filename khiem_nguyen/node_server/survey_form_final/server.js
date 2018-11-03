var express = require("express");

var session = require('express-session')

var path = require("path");

var app = express();

var bodyParser = require('body-parser');

app.use(session({
  secret: 'keyboardkitten',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  if (req.session.name) {
    req.session.name = undefined;
  }
  if (req.session.language) {
    req.session.language = undefined;
  }
  if (req.session.location) {
    req.session.location = undefined;
  }
  if (req.session.comment) {
    req.session.comment = undefined;
  }
  res.render("index");
});

app.post('/process', function(req, res) {
  req.session.name = req.body.name;
  req.session.location = req.body.location;
  req.session.language = req.body.language;
  req.session.comment = req.body.comment;
  res.redirect('/results');
});

app.get('/results', function(req, res) {
  res.render("results", { 'name': req.session.name, 'location': req.session.location, 'language': req.session.language, 'comment': req.session.comment });
});

app.listen(8000, function() {
 console.log("listening on port 8000");
});
