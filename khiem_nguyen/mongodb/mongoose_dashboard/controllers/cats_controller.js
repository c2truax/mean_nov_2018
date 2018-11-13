var Cat = require('../models/cat');

module.exports = {

    index: function(req, res){
        Cat.find({}, function(err, cats) {
            if (err) {
            }
            else {
                res.render('index', {cats: cats});
            }
        });
    },
    new: function(req, res){
        // console.log("****** new.ejs should be displaying!******")
        res.render('new');
    },
    create: function(req, res) {
      var cat = new Cat({name: req.body.name, age: req.body.age});
      cat.save(function(err) {
        if (err) {
          console.log('something went wrong while creating a new cat');
          for (var key in err.errors) {
            req.flash('create', err.errors[key].message);
          }
          res.redirect('/cats/new');
        }
        else {
          console.log('successfully created cat');
          res.redirect('/');
        }
      });
    },
    display: function(req, res) {
        Cat.findOne({_id: req.params.id}).exec(function(err, cat) {
            if (err) {
                console.log('something went wrong:', err);
                res.redirect('/');
            }
            else {
                res.render('display', {cat: cat});
            }
        });
    },
    edit: function(req, res) {
      console.log(req.params.id);
      Cat.findById(req.params.id).exec(function(err, cat) {
        if (err) {
          console.log('something went wrong:', err);
          res.redirect('/');
        }
        else {
          res.render('edit', {cat: cat});
        }
      });
    },
    update: function(req, res) {
      Cat.update({_id: req.params.id}, {$set: {
        name: req.body.name,
        age: req.body.age
      }}, {runValidators: true}).exec(function(err) {
        if (err) {
          console.log('something went wrong:', err);
          for (var key in err.errors) {
            req.flash('edit', err.errors[key].message);
          }
          res.redirect(`/cats/edit/${req.params.id}`);
        }
        else {
          console.log('successfully updated cat!');
          res.redirect('/');
        }
      });
    },
    destroy: function(req, res){
      Cat.deleteOne({_id: req.params.id}, function(err){
        if (err) {
          res.redirect('/');
        }
        else {
          res.redirect('/');
        }
      });
    }
}
