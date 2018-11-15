var Product = require('../models/product');

module.exports = {
  products: function(req, res){
    Product.find({}, function(err,products){
      res.json({err: err, products: products});
    });
  },
  new: function(req, res){
    var product = new Product({title: req.body.title, price: req.body.price, imageUrl: req.body.imageUrl});
    product.save(function(err, product) {
      res.json({err: err, product: product});
    });
  },
  delete: function(req, res){
    Product.findByIdAndRemove(req.params.id, function(err,product){
      res.json({err: err, product: product});
    });
    
  },
  product_id: function(req, res){
    Product.findById(req.params.id, function(err,product){
      res.json({err: err, product: product});
    });
  },
  product_update_id: function(req, res){
    Product.findByIdAndUpdate(req.params.id, {$set: {title: req.body.title, price: req.body.price, imageUrl: req.body.imageUrl}}, function(err,product){
      res.json({err: err, product: product});
    });
  }
}
