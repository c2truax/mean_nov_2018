var Quote = require('../models/quote');

module.exports = {

  index: function(req, res){
    res.render('index');
  },
  quotes: function(req, res){
    quotes = Quote.find({}, function(err, quotes) {
      if (err) {
        res.redirect('/quotes')
      }
      else {
        res.render('quotes', {all_quotes: quotes});
      }
    });
  },
  quote: function(req, res){
    console.log("POST DATA", req.body);
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    // Try to save that new quote to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.copy
    quote.save(function(err) {
    // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong', err);
        for(var key in err.errors){
          req.flash('registration', err.errors[key].message);
        } 
        res.redirect('/');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a quote!');
        res.redirect('/quotes');
      }
    });
  }
}
