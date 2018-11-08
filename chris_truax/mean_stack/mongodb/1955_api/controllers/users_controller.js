var User = require('../models/user');

module.exports = {
  index: function(req, res){
    User.find({}, function(err,users){
      res.json({err: err, boomers: users});
    });
  },
  new: function(req, res){
    var user = new User({name: req.params.name});
    user.save(function(err, user) {
      res.json({err: err, boomer: user});
    });
  },
  remove: function(req, res){
    User.findOneAndRemove({name: req.params.name}, function(err,user){
      res.json({err: err, boomer: user});
    });
    
  },
  getone: function(req, res){
    User.findOne({name: req.params.name}, function(err,user){
      res.json({err: err, boomer: user});
    });
  }
}
