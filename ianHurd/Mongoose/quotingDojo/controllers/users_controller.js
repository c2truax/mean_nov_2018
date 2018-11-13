
var Quotes = require('../models/user');

module.exports = {
  quotes: function(req, res){
        res.render('index');
  },
  render: function(req, res){
    console.log("POST DATA", req.body);
    var quote = new Quotes({name: req.body.name, quote: req.body.quote});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    quote.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
        }
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        console.log(quote.name,",",quote.quote);
        }
      res.redirect('/quotes');
    });
  },
  display: function(req, res){
    Quotes.find({}, function(err, quotes) {
      res.render('display', {quotes: quotes});
    });

  }

}
