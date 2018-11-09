var express = require("express");

var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/cats", function (request, response){
	
    
    response.render('cats');
})

app.get('/cats/1', function(request, response) {

    var cat_array = [
      {name: "lucas", 
      food: "lasagna",
      image: "images/cat1.jpg",
      spots: ["floor", "couch", "bed"]
    }
    ];
 // use the response object's .send() method to respond with an h1
 response.render('data', {cats: cat_array});
})

app.get('/cats/2', function(request, response) {

    var cat_array = [
      {name: "chloe", 
      food: "lasagna",
      image: "images/cat2.jpg",
      spots: ["floor", "couch", "bed"]
    }
    ];
 // use the response object's .send() method to respond with an h1
 response.render('data', {cats: cat_array});
})


app.listen(8000, function() {
  console.log("listening on port 8000");
})