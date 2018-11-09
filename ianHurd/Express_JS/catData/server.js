
var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
app.get('/', function(request, response) {
   response.send("<h1>Hello Express</h1>");
})
app.get('/cats', function(request, response) {
   response.render('cats');
})
app.get('/soffer', function(request, response) {
  let fact = ['Dust Bunnies',1,"In the couch"];
   response.render('soffer', {facts:fact});
})
app.get('/angery', function(request, response) {
  let fact = ['Childrens Dream',0,"Hell"];
   response.render('angery', {facts:fact});
})
app.get('/toungsten', function(request, response) {
  let fact = ['Lollipop',2,"Toungeland"];
   response.render('toungsten', {facts:fact});
})
app.listen(8000, function() {
  console.log("listening on port 8000");
})
