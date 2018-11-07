var Niffler = require('../models/niffler');

module.exports = {

  new: function(req, res){
    res.render('new');
  },
  index: function(req, res){
    nifflers = Niffler.find({}, function(err, nifflers) {
      if (err) {
        res.redirect('/')
      }
      else {
        res.render('index', {all_nifflers: nifflers});
      }
    });
  },
  nifflers: function(req, res){
    console.log("POST DATA", req.body);
    var niffler = new Niffler({name: req.body.name, color: req.body.color});
    // Try to save that new niffler to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.copy
    niffler.save(function(err) {
    // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong', err);
        for(var key in err.errors){
          req.flash('registration', err.errors[key].message);
        } 
        res.redirect('/nifflers/new');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a niffler!');
        res.redirect('/');
      }
    });
  }
}
