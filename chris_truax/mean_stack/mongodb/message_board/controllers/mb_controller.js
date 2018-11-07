var Comment = require('../models/comment');
var Message = require('../models/message');

module.exports = {

  index: function(req, res){
    Message.find({}).populate('comments').exec(function(err, messages) {
      if (err) {
        console.log("Error on load!")
      }
      else {
        res.render('index', {mb: messages});
      }
    });
  },

  message: function(req, res){
    console.log(req.body);
    var new_message = new Message({name: req.body.name, content: req.body.content});
    new_message.save(function(err, message) {
      if (err) {
        console.log('There is an error: ', err);
        for(var key in err.errors){
          req.flash('message', err.errors[key].message);
        }
        res.redirect('/');
      }
      else {
        res.redirect('/');
      }
    });
  },

  comment: function(req, res){
    // console.log(req.body);
    var new_comment = new Comment({name: req.body.name, content: req.body.content});
    new_comment.save(function(err, comment) {
      if (err) {
        console.log('There is an error: ', err);
        for(var key in err.errors){
          req.flash('message', err.errors[key].message);
        }
        res.redirect('/');
      }
      else {
        Message.findById({_id: req.body.message_id}, function(err, message) {
          if (err) {
            for(var key in err.errors){
              req.flash('message', err.errors[key].message);
            }
            res.redirect('/');
          }
          else {
            message.comments.push(comment);
            message.save();
            res.redirect('/');
          }
        });

        
      }
    });
  },

}
