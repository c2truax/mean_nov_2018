// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);

// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);

app.use(express.static(__dirname + '\\static'));

app.set('views', __dirname + '\\views');

app.set('view engine', 'ejs');

// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
   console.log("The request object", request);
   console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.render('main');
})

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
});

app.get('/cars/new', function(request, response) {
        response.render('new_car');
});

app.get('/cars', function(request, response) {
	response.render('cars');
});

app.get('/cats', function(request, response) {
	response.render('cats');
});

app.get('/cats/:catid', function(request, response) {
	context = {};
	if (request.params['catid'] == 'majesty') {
		context['favorite_food'] = 'suckerplooms';
		context['age'] = 2;
		context['sleeping_spots'] = ['on the couch', 'with other ppl'];
		context['name'] = 'majesty';
	}

	if (request.params['catid'] == 'sleepyface') {
		context['favorite_food'] = 'pizza';
		context['age'] = 6;
		context['sleeping_spots'] = 'everywhere';
		context['name'] = 'sleepyface';
	}

	response.render('view_cat', context)
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})