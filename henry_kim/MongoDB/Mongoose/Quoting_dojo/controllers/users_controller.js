var Quote = require('../models/user');

module.exports = {

  index: function(req, res){
        res.render('index');
      },

  add: function(req, res){
    console.log("POST DATA", req.body);
    var quotes = new Quote({name: req.body.name, quote: req.body.quote});
    quotes.save(function(err) {
    if(err) {
      console.log('something went wrong', err);
      for(var key in err.errors){
          req.flash('Quote', err.errors[key].message);
          }
      res.redirect("/");
      }
      else {
        console.log('successfully added a quote!');
        console.log(quotes);
        res.redirect('/quotes');
        }
      });
 },

 quotes: function(req, res){
   var quote = Quote.find({}, function(err, quotes){
    console.log(quote)
    res.render('quotes', {quotes: quotes});
  });
},


}
