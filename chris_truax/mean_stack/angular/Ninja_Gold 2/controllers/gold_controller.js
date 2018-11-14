var Gold = require('../models/gold');

module.exports = {

  index: function(req, res){
    var add = new Gold({});
    console.log('hello')
    add.save(function (err, gold){
      console.log(gold);
      console.log(err);
      res.json({err: err, data: gold});
    });
  },

  new: function(req, res){
    console.log('newgame', req.body);
    var add = new Gold({gold: 0, name: req.body.name});
    console.log('hello post');
    add.save(function (err, gold){
      console.log(gold);
      res.json({err: 'this is the response', data: gold});
    });
  },

  update: function(req, res){
    console.log('update', req.body.id)
    Gold.findByIdAndUpdate(req.body.id, {$set: {gold: req.body.gold}}, function(err, gold){
      res.json({err: err, data: gold});
    });
  }

}
