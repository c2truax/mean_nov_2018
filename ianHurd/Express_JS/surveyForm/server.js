
var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000 }
}))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function(request, response) {
  response.render('index');

})

app.get('/result', function(request, response) {
  response.render('result', {info:request.session.info});
})

app.post('/process', function(request, response) {
  request.session.info = request.body;
  response.redirect('/result');
})
app.listen(8000, function() {
  console.log("listening on port 8000");
})
