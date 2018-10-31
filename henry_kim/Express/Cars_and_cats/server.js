// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
// use app's get method and pass it the base route '/' and a callback
app.use(express.static(__dirname + "/static"));
app.get('/', function(request, response) {
   response.send("<h1>Hello Express</h1>");
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})
