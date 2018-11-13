var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"], minlength: [2, "Name needs to be at least two characters"] },
  quote: { type: String, required: [true, "Quote is required"], maxlength: [255, "Quote can only be up to 255 characters long"] }
}, { timestamps: true });

var Quote = mongoose.model('Quote', QuoteSchema);
module.exports = Quote;
