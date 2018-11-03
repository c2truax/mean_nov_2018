// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback


// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get("/cars", function (request, response){
    // hard-coded user data
    response.render('cars');
})

app.get("/cats", function (request, response){
    // hard-coded user data
    response.render('cats');
})
app.get("/cat1", function (request, response){
    // hard-coded user data
    var cat_data = {
            name: "Snow",
            color: "white",
            age: "1",
            weight: "10lbs",
            image: "/images/cat1.jpg"
    }
    response.render('detail', {cat: cat_data});
})
app.get("/cat2", function (request, response){
    // hard-coded user data
    var cat_data = {
            name: "Paws",
            color: "brown",
            age: "2",
            weight: "8lbs",
            image: "/images/cat2.jpg"
    }
    response.render('detail', {cat: cat_data});
})
app.get("/cat3", function (request, response){
    // hard-coded user data
    var cat_data = {
            name: "Grey",
            color: "grey",
            age: "1",
            weight: "11lbs",
            image: "/images/cat3.jpg"
    }
    response.render('detail', {cat: cat_data});
})

app.get("/cars/new", function (request, response){
    // hard-coded user data
    response.render('cars_new');
})


// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})
