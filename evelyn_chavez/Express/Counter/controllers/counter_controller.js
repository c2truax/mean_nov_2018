// Export functions for our routes.js file to use. This is where the logic of
// your server will go.
module.exports = {
    home_function: function(req, res){
        if( req.session.count){
            req.session.count ++;
        }
        else {
            req.session.count = 1;
        }
        res.render('index', {session: req.session});
    },
    add_function: function(req, res){
        req.session.count += 1;
        res.redirect('/');
    },
    reset_function: function(req, res){
        req.session.destroy();
        res.redirect('/');
    }
}