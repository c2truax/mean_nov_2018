// Export functions for our routes.js file to use. This is where the logic of
// your server will go.
module.exports = {

  home_function: function(req, res){
    if(req.session.count){
      req.session.count += 1;
    }
    else{
      req.session.count = 1;
    }
    res.locals.count = req.session.count;
    res.render('counter');
  },

  increment: function(req, res){
    if(req.session.count){
      req.session.count += 1;
    }
    res.redirect('/')
  },

  reset: function(req, res){
    if(req.session.count){
      req.session.count = 0;
    }
    res.redirect('/')
  },

}
