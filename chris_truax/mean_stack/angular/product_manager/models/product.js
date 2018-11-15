var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  title: {
      type: String,
      minlength: [4,"Product title must be over 3 letters long."],
      required: [true, 'Product title is required.'],
  },
  price: {
      type: Number,
      required: [true, 'Price is required.'],
  },
  imageUrl: {
      type: String,
      default: "http://products.ideadunes.com/assets/images/default_product.jpg",
  }
}, {timestamps: true });

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
