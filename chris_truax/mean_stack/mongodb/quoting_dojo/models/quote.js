var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '', 
    required: true, 
    minlength: 2
  },
  quote: {
    type: String,
    default: '',
    required: true, 
    minlength: 5
  }
}, {timestamps: true });

var Quote = mongoose.model('Quote', QuoteSchema);
module.exports = Quote;
