var Dog = require('../models/user');

module.exports = {

  index: function(req, res){
    Dog.find({}, function(err, dogs) {
      // console.log(dogs);
      if (err) {
        // res.redirect('/')
      }
      else {
        res.render('all_info', {dogs: dogs});
      }
    });
  },

  dog_id: function(req, res){
    console.log(req.params.id);
    console.log(`ObjectId("${req.params.id}")`);
    // dog_id = Dog.find({}, function(err, dogs) {
    Dog.findById(req.params.id, function(err, dogs){
      if (err) {
        // console.log(err);
        console.log('hello');
        res.redirect('/');
      }
      else {
        res.render('id_info', {dogs: dogs});
      }
    });
  },

  new: function(req, res){
    res.render('index');
  },

  dogs: function(req, res){
    console.log(req.body);
    var new_dog = new Dog({name: req.body.name, age: req.body.age});
    new_dog.save(function(err, dog) {
      if (err) {
        console.log('There is an error: ', err)
        for(var key in err.errors){
          req.flash('new_dog', err.errors[key].message);
        }
        res.redirect('/dogs/new')
      }
      else {
        res.redirect('/');
      }
    });
  },

  edit_dog: function(req, res){
    query = Dog.findById(req.params.id, function(err, dogs) {
      if (err) {
        console.log('hello');
        console.log(err);
        
        res.redirect(`/dogs/edit/${req.params.id}`);
      }
      else {
        res.render('edit', {dog: dogs});
      }
    });
    
    
    
  },

  edit_process: function(req, res){
    query = Dog.findById(req.params.id);
    console.log(req.body);
    updated = Dog.update(query, {name: req.body.name, age: req.body.age}, {runValidators: true}, function(err, dogs) {
        if (err) {
          console.log('hello');
          console.log(err);
          for(var key in err.errors){
            req.flash('edit_dog', err.errors[key].message);
            console.log('err loop');
          }
          res.redirect(`/dogs/edit/${req.params.id}`);
        }
        else {
          res.redirect(`/dogs/${req.params.id}`);
        }
      });
  },

  destroy: function(req, res){
    console.log('enter destroy function');
    console.log(req.body.test);
    Dog.deleteOne({_id: req.params.id}, function(err){
      if (err) {
        console.log('hello');
        res.redirect('/');
      }
      else {
        res.redirect('/');
      }
    });
  }

}
