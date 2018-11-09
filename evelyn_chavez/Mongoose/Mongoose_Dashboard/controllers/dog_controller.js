var Dog = require('../models/dog');

module.exports = {


  home_function: function(req, res){
    dogs = Dog.find({}, function(err, dogs) {
      res.render('index', {all_dogs: dogs});
    });
  },
  new_function: function(req, res){
    res.render('new');
  },
  create_function: function(req, res){
    var new_dog = new Dog({name: req.body.name, age: req.body.age, gender: req.body.gender});
    new_dog.save(function(err){
      if(err){
        for(var key in err.errors){
            req.flash('create', err.errors[key].message);
        }
        res.redirect('/dog/new');
      }
      else {
          res.redirect('/');
      }
    });

  },
  show_function: function(req, res){
    Dog.findOne({_id: req.params.id}).exec(function(err, dog){
          res.render('show', {dog: dog});
      });
  },
  edit_function: function(req, res){
    Dog.findOne({_id: req.params.id}).exec(function(err, dog){
      res.render('edit', {dog: dog});
    });
  },
  update_function: function(req, res){
    Dog.update({_id: req.params.id}, {name: req.body.name, age: req.body.age, gender: req.body.gender}, {runValidators: true}).exec(function(err, dog){
      if(err){
        for(var key in err.errors){
          req.flash('update', err.errors[key].message);
        }
        res.redirect('/dog/edit/'+req.params.id);
      }
      else{
          res.redirect('/');
      }
    });
  },
  destroy_function: function(req, res){
    Dog.remove({_id: req.params.id}).exec(function(err, dog){
      res.redirect('/');
    });
  },
}




  
