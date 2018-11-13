var User = require('../models/1955');


module.exports = {
    home_function: function(req, res){
        User.find({}).exec(function(err, users){
            if(err){
                console.log("Returned error", err);
                 // respond with JSON
                res.json({message: "Error", error: err})
             }
             else {
                 // respond with JSON
                res.json({message: "Success", data: users})
             }
        });
    },
    new_function: function(req, res){
        user = new User({name: req.params.name});
        user.save(function(err, user){
            if(err){
                console.log("Returned error", err);
                 // respond with JSON
                res.json({message: "Error", error: err})
             }
             else {
                 // respond with JSON
                res.json({message: "Success", data: user})
             }
        })
    },
    remove_function: function(req, res){
        User.findOne({name: req.params.name}, function(err, user){
            if(user){
                User.remove(user, function(err, data){
                    if(err){
                        console.log("Returned error", err);
                         // respond with JSON
                        res.json({message: "Error", error: err})
                     }
                     else {
                         // respond with JSON
                        res.json({message: "Success", data: data})
                     }
                })
            }
            else {
                console.log("Returned error", err);
                // respond with JSON
               res.json({message: "Error", error: err})
            }
        })
    },
    show_function: function(req, res){
        User.findOne({name: req.params.name}, function(err, user){
            if(err){
                console.log("Returned error", err);
                 // respond with JSON
                res.json({message: "Error", error: err})
             }
             else {
                 // respond with JSON
                res.json({message: "Success", data: user})
             }
        })
    }


}