var User = require('../models/user');
var bcrypt   = require('bcryptjs')
module.exports = {
  index: function(req, res){
    res.render('index');
  },
  register: function(req, res){
    console.log("POST DATA", req.body);
    var pre_hash = req.body.password;
    if (pre_hash.length >= 8){
      var hash = bcrypt.hashSync(pre_hash, 10);
    }
    else{
      var hash = pre_hash;
    }
    var user = new User({email: req.body.email, first_name: req.body.first_name, last_name: req.body.last_name, password: hash, birthday: req.body.birthday});
    user.save(function(err) {
      if(err) {
        for(var key in err.errors){
          req.flash('registration', err.errors[key].message);
        }
        console.log('something went wrong');
        res.redirect('/');
      }
      else {
        console.log('successfully added a user!');
        console.log(user.first_name,",",user.last_name);
        req.session.user_id = user._id;
        res.redirect('/success');
      }
    });
},
  login: function(req, res){
    if(req.body.email && req.body.password){
      User.findOne({email: req.body.email}, function(err, user) {
        console.log(user);
        if(user == null){
          console.log("Im in here");
          req.flash('registration', 'Login Invalid');
          return res.redirect('/');
        }
        if (bcrypt.compareSync(req.body.password, user.password)){
          req.session.user_id = user._id;
          res.redirect('/success');
        }
        else{
          console.log("Password failed");
          req.flash('registration', 'Login Invalid');
          return res.redirect('/');
        }
      });
    }
    else{
      req.flash('registration', 'Login Invalid');
      res.redirect('/');
    }
  },
  success: function(req, res){
    if (!req.session.user_id){
      res.redirect('/');
    }
    User.findById({_id: req.session.user_id}, function(err, user) {
      console.log(user);
      res.render('success', {user: user});
    });
  },
  logout: function(req, res){
    req.session.destroy();
    res.redirect('/');
  }
}
