
module.exports = {

  home_function: function(req, res){
    if (req.session.count){
      req.session.count += 1;
    } else {
      req.session.count = 1;
    }
    res.locals.count = req.session.count;
    res.render('index');
  },
  two_function: function(req,res){
    if (req.session.count){
      req.session.count += 1;
    } else {
      req.session.count = 1;
    }

    res.redirect('/');
  },
  reset_function: function(req,res){
    req.session.destroy();
    res.redirect('/');
  }

}
