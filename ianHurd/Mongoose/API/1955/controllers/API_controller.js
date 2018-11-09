var Boomer = require('../models/people');

module.exports = {
  all: function(req, res){
      Boomer.find({}, function(err, boomers){
          if(err){
             console.log("Returned error", err);
              // respond with JSON
             res.json({err: err, data: ""})
          }
          else {
              // respond with JSON
             res.json({err: "", data: boomers})
          }
       })
  },
  one: function(req, res) {
    Boomer.findOne({name: req.params.name}, function(err, boomers){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({err: err, data: ""})
        }
        else {
            // respond with JSON
           res.json({err: "", data: boomers})
        }
     })
  },

  create_boomer: function(req, res) {
    boomer = new Boomer({name: req.params.name});
    boomer.save(function(err) {
      if (err) {
        console.log('returned error', err);
        res.json({err: err, data: ""})
      } else {
        res.redirect('/')
      }
    })
  },

  kill_boomer: function(req, res) {
    Boomer.deleteOne({name: req.params.name}, function(err) {
      if (err) {
        console.log('returned error', err);
        res.json({err: err, data: ""})
      } else {
        res.redirect('/')
      }
    });
  }
}
