// Export functions for our routes.js file to use. This is where the logic of
// your server will go.
module.exports = {

  home_function: function(req, res){
    // A dummy array of users.
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];

    // In order to display a page with data we need to render. The first argument
    // render needs is the file. Here, it is index.ejs. Express knows where to find
    // this file because in server.js we told express where our views are
    // (line 14).

    // Next, render needs an object. The key, or property in this object will be
    // the name we can use in our ejs file ('users' here) and the value will
    // be what is stored in that property (the users_array from above).
    res.render('index', {users: users_array});
  },
  cars_function: function(req,res){
    res.render('cars');
  },
  cats_function: function(req,res){
    res.render('cats');
  },
  carsnew_function: function(req,res){
    res.render('form');
  },
  paws_function: function(req, res){
    var cats_array = [
        {name: "Paws", food: "hotdogs", age: "1", spots: ["roof", "garage"]},
    ];
    res.render('details', {cats: cats_array});
  },
  dog_function: function(req, res){
    var cats_array = [
        {name: "Dog", food: "hotdogs", age: "4", spots: ["master's bed", "sunroom"]},
    ];
    res.render('details', {cats: cats_array});
  },
  stinky_function: function(req, res){
    var cats_array = [
        {name: "Stinky", food: "hotdogs", age: "100", spots: ["roof", "garage"]}
    ];
    res.render('details', {cats: cats_array});
  },
}
