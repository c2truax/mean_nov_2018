module.exports = {
    home_function: function(req, res){
        res.render('index', {session: req.session});
    },
    submit_function: function(req, res){
        req.session.name = req.body.name;
        req.session.location = req.body.location;
        req.session.language = req.body.language;
        req.session.comment = req.body.comment;
        res.redirect('/results');
    },
    success_function: function(req, res){
        res.render('success', req.session);
    },
    goback_function: function(req, res){
        req.session.destroy();
        res.redirect('/');
    }
}
