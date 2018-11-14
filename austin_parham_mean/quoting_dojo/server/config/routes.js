var quotes = require('../controllers/quotes');
const mongoose = require('mongoose'),
	Quote = mongoose.model('Quote')
module.exports = function(app){
	app.get('/', quotes.index);
	// Add User Request 
	app.post('/quotes', quotes.create);
	app.get('/quotes_list', quotes.list);

}