var express = require('express'),
  app = express(),
  path = require('path'),
  port = 12345,
  session = require('express-session'),
  bodyParser = require('body-parser');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60000
  }
}));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/', function (request, response) {
  if (!(request.session.counter)) {
    request.session.counter = 0;
  }
  request.session.counter += 1;
  console.log(request.session.counter);
  response.render("index", {
    'counter': request.session.counter
  });
});

app.get('/twice', function (request, response) {
  request.session.counter += 1;
  response.redirect('/');
});

app.get('/reset', function (request, response) {
  request.session.counter = 0;
  response.redirect('/');
});

app.listen(port, function () {
  console.log('listening on ' + port);
});
