var Otters = require('../models/otter');
var mongoose =require('mongoose');

module.exports = {

  create_otter: function(req, res){
    console.log("POST DATA", req.body);
    //Query by using {}
    var otter = new Otters({name: req.body.name, age: req.body.age, personality: req.body.personality});
    otter.save(function(err) {
      if(err) {
        for(var key in err.errors){
          req.flash('otter', err.errors[key].message);
        }
        console.log('something went wrong');
        res.redirect('/otters/new');
      }
      else {
        console.log('successfully added a otter!');
        console.log(otter.name,",",otter.age,",",otter.personality);
        res.redirect('/');
        }
    });
},

  index: function(req, res){
    Otters.find({}, function(err, otters){
      res.render('index', {otters: otters});
    });
  },

  profile: function(req, res){
    Otters.find({_id: req.params.id}, function(err, otter){
      res.render("profile", {otters: otter});
    });
  },

  new: function(req, res){
    res.render('new_otter');
  },

  edit: function(req, res){
    Otters.find({_id: req.params.id}, function(err, otter){
      res.render('edit', {otter: otter});
    });
  },

  update_otter: function (req, res) {
		Otters.findOneAndUpdate({_id: req.params.id},{
      $set:{
        name: req.body.name,
        age: req.body.age,
        personality: req.body.personality,
        }
      }, {runValidators: true}, function (err, otter) {
      if (err) {
        console.log("Something went wrong!", err);
        for(var key in err.errors){
          req.flash('otter', err.errors[key].message);
        }
        res.redirect(`/otters/edit/${req.params.id}`);
			} else {
				console.log("Updating otter information");
        res.redirect('/');
		    }
    });

  },

  destroy: function(req, res){
    Otters.findOneAndDelete({_id: req.params.id}, function (err){
      if(err){
        console.log(err.message);
      }else{
        console.log(req.params.id);
      }
      res.redirect('/');
    });
  },

}
