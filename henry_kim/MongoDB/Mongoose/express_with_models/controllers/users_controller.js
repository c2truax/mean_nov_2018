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
    user.save(function(err) {
    if(err) {
      console.log('something went wrong');
      }
      else {
        console.log('successfully added a user!');
        res.redirect('/users');
        }
      });
 },

}
