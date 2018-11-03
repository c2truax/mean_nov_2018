// require is similar to import in Python
// express is a framework that we will import.
var express    = require('express'),
    // app is going to be how we use express to add routes, find templates, etc.
    app        = express(),
    // path lets us easily combine variables and string to form a file path
    path       = require('path'),
    port       = 8000;

// Tell express where our static files are
app.use(express.static(path.join(__dirname, 'static')));

// Tell express where our views are
app.set(path.join('views', __dirname, 'views'));

// Now lets set the view engine itself so that express knows that we are using
// ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');


app.get("/cats", function (request, response){
    response.render('cat');
})

app.get("/cats/:cat", function (request, response){
    // hard-coded user data
    context = {}
    if(request.params.cat == "bird"){
    context['cat'] = request.params.cat;
    context['image'] = "../images/cat1.jpg"
    context['favorite_food'] = "Chicken";
    context['age'] = 2;
    context['sleeping_spots'] = [ " Office","Manager's Room" ];
    }

    if(request.params.cat == "chicken"){
    context['cat'] = request.params.cat;
    context['image'] = "../images/cat2.jpg"
    context['favorite_food'] = "Masks";
    context['age'] = "Ancient";
    context['sleeping_spots'] = [ "Everywhere","Schol" ];
    }

    response.render('details', context);
})

app.listen(port, function() {
    console.log(`listening on port ${port}`);
})
