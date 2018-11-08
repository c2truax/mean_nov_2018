var express = require("express"),
  app = express(),
  path = require("path"),
  port = 8000,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

// Tell express where our static files are
app.use(express.static(path.join(__dirname, 'static')));

// Tell express where our views are
app.set(path.join('views', __dirname, 'views'));

// Tell express we are using ejs
app.set("view engine", "ejs");

// We create this file, it contains all of our routes. Think urls.py in Django
// and routes.rb in ruby.
require('./config/routes.js')(app);

app.listen(port, function () {
  console.log(`listening on ${port}`);
});
