var Quote = require('../models/quotes');

module.exports = {

    index: function(req, res){
            res.render('index');
    },
    submit: function(req, res){
        console.log("POST DATA:", req.body);
        var quote = new Quote({ name: req.body.name, quote: req.body.quote });
         quote.save(function(err) {
            if (err) {
                console.log('Something went wrong:', err);
                for (var key in err.errors) {
                req.flash('submit', err.errors[key].message);
                }
                res.redirect('/');
            }
            else {
              console.log('Successfully added a user!');
              res.redirect('/quotes');
            }
        });
    },
    view: function(req, res){
        Quote.find({}).sort({createdAt: -1}).exec(function(err, quotes) {
            if (err) {
              console.log('something went wrong');
            }
            else {
              res.render('quotes', {quotes: quotes});
            }
        });
    },

    }
