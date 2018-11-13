var User = require('../models/user');


module.exports = {
    home_function: function(req, res){
        Message.find({}).exec(function(err, messages){
            if(err){
                for(var key in err.errors){
                    req.flash('create', err.errors[key].message);
                }
                res.render('index', {messages: messages});
            }
            else{
                res.render('index', {messages: messages});
            }
        });
    },
    new_function: function(req, res){
        var new_message = new Message(req.body);
        new_message.save();
        res.redirect('/');
    },
    create_function: function(req, res){
        var new_c = new Comment.model(req.body);
        new_c.save();
        Message.findOneAndUpdate({_id: req.params.id}, {$push: {comments: new_c}}, function(err, data){
            res.redirect('/');
        });
    },
}