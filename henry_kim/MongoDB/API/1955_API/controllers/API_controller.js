var People = require('../models/people');

module.exports = {

  //Get all people
  index: function(req, res){
      People.find({}, function(err, people){
        res.json({err: "", data: people})
    });
   },

  create_people: function(req, res) {
    people = new People({name: req.params.name});
    people.save(function(err) {
      if (err) {
        console.log('returned error', err);
        res.json({err: err, data: ""})
       } else {
        res.redirect('/')
       }
     })
    },

  remove_people: function(req, res) {
    People.deleteOne({name: req.params.name}, function(err) {
      res.redirect('/');
    });
  },

profile: function(req, res) {
  People.findOne({name: req.params.name}, function(err, people){
      if(err){
         console.log("Returned error", err);
         res.json({err: err, data: ""})
      }
      else {
         res.json({err: "", data: people})
      }
   })
  },

}
