var Quote = require('../models/quote');


module.exports = {
    home_function: function(req, res){
        res.render('index');
    },
    submit_function: function(req, res){
        Quote.create({name: req.body.name, quote: req.body.quote})
        res.redirect('/quotes');
    },
    success_function: function(req, res){
        Quote.find({}).sort({createdAt: -1}).exec(function(err, quote){
            res.render('quotes', {quotes: quote});
        });

    }
}