var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
    name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [2, "Name must be atleast 2 characters"]
  },

  quote: {
    type: String,
    required: [true, "Quote is required!"],
    minlength: [8, "Must be atleast 8 characters long"],
  },
}, {timestamps: true });

var Quote = mongoose.model('Quote', QuoteSchema);
module.exports = Quote;
