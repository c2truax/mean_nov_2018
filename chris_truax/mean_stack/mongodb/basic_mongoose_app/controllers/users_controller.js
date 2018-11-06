var User = require('../models/user');

module.exports = {

  users: function(req, res){
    users = User.find({}, function(err, users) {
      if (err) {
        res.redirect('/users')
      }
      else {
        res.render('index', {all_users: users});
      }
    });
  },
  add: function(req, res){
    console.log("POST DATA", req.body);
    var user = new User({name: req.body.name, age: req.body.age});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.copy
    user.save(function(err) {
    // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        res.redirect('/');
      }
    });
  }
}
