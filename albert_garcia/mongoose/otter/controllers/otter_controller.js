var Otter = require('../models/otter');


module.exports = {
    home_function: function(req, res){
        Otter.find({}).exec(function(err, otter){
            res.render('index', {otters: otter});
        });
    },
    new_function: function(req, res){
        res.render('new');
    },
    create_function: function(req, res){
        var new_otter = new Otter({name: req.body.name, age: req.body.age, gender: req.body.gender})
        new_otter.save(function(err){
            if(err){
                for(var key in err.errors){
                    req.flash('create', err.errors[key].message);
                }
                res.redirect('/otters/new');
            }
            else {
                res.redirect('/');
            }
        });

    },
    show_function: function(req, res){
        Otter.findOne({_id: req.params.id}).exec(function(err, otter){
            res.render('show', {otter: otter});
        });
    },
    edit_function: function(req, res){
        Otter.findOne({_id: req.params.id}).exec(function(err, otter){
            res.render('edit', {otter: otter});
        });
    },
    update_function: function(req, res){
        Otter.update({_id: req.params.id}, {name: req.body.name, age: req.body.age, gender: req.body.gender}, {runValidators: true}).exec(function(err, otter){
            if(err){
                for(var key in err.errors){
                    req.flash('update', err.errors[key].message);
                }
                res.redirect('/otters/edit/'+req.params.id);
            }
            else{
                res.redirect('/');
            }
        });
    },
    destroy_function: function(req, res){
        Otter.remove({_id: req.params.id}).exec(function(err, otter){
            res.redirect('/');
        });
    }
}