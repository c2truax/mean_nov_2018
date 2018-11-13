var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var path = require('path');
var session = require('express-session');
app.use(session({
  secret: 'thisisasecret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
var flash = require('express-flash');
app.use(flash());

var mongoose = require('mongoose');
var validate = require('mongoose-validator');
mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.Promise = global.Promise;

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var QuoteSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"], minlength: [2, "Name needs to be at least two characters"] },
  quote: { type: String, required: [true, "Quote is required"], maxlength: [255, "Quote can only be up to 255 characters long"] }
}, { timestamps: true });
mongoose.model('Quote', QuoteSchema);
const Quote = mongoose.model('Quote');

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/quotes', function(req, res) {
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
});

app.get('/quotes', function(req, res) {
  Quote.find({}).sort({createdAt: -1}).exec(function(err, quotes) {
    if (err) {
      console.log('something went wrong');
    }
    else {
      res.render('quotes', {quotes: quotes});
    }
  });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})
