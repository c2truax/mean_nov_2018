var User = require('../models/login');
const bcrypt = require('bcryptjs');


module.exports = {
    home_function: function(req, res){
        res.render('index');
    },
    success_function: function(req, res){
        if(req.session.user_id){
            User.findOne({_id: req.session.user_id}).exec(function(err, user){
                res.render('success', {user: user});
            });
        }
        else {
            res.redirect('/');
        }
    },
    reg_function: function(req, res){
        User.findOne({email: req.body.email}, function(err, user){
            if(user){
                req.flash('reg', "Email is already in our database, please login instead");
                res.redirect('/');
            }
            else {
                if(req.body.password != req.body.password_confirmation){
                    req.flash('reg', "Password confirmation did not match")
                    req.session.errors = 1;
                }
                var now = Date.now() - 409968000000;
                var x = new Date(req.body.dob).valueOf();
                if( x > now){
                    req.flash('reg', "You must be at least 13 years old to register, please have a parent or guardian register instead");
                    req.session.errors = 1;
                }
                bcrypt.hash(req.body.password, 10)
                .then(hashed_password => {
                    var c = req.body.password.search(/[a-z]/);
                    var n = req.body.password.search(/[0-9]/);
                    var cap = req.body.password.search(/[A-Z]/);
                    var l = req.body.password.length;
                    if(c < 0 || n < 0 || cap < 0){
                        req.flash('reg', "Password must contain at least one uppercase letter and at least one number");
                        hashed_password = req.body.password;
                        req.session.errors = 1;
                    }
                    if(l < 8){
                        hashed_password = req.body.password;
                    }
                    new_u = new User({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, dob: req.body.dob, password: hashed_password});
                    new_u.validate(function(err){
                        if(err){
                            for(var key in err.errors){
                                req.flash('reg', err.errors[key].message);
                            }
                            res.redirect('/');
                        }
                        else if(req.session.errors){
                            console.log(req.session.errors)
                            res.redirect('/');
                        }
                        else{
                            new_u.save(function(err){
                                req.session.user_id = new_u.id;
                                res.redirect('/success/'+ new_u.id);
                            });
                        }
                    });
                })
                .catch(error => {
                    res.redirect('/');
                });
            };
        });
    },
    login_function: function(req, res){
        User.findOne({email: req.body.email}, function(err, user){
            if(user){
                bcrypt.compare(req.body.password, user.password)
                .then( result => {
                    if(result == true){
                        req.session.user_id = user.id;
                        res.redirect('/success/'+ user.id);  
                    }
                    else {
                        res.redirect('/');
                    };
                })
                .catch( error => {
                    res.redirect('/');
                })
            }
            else{
                res.redirect('/');
            }
        });
    },
    logout_function: function(req, res){
        req.session.destroy();
        res.redirect('/');
    }
}