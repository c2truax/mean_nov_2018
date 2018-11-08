
module.exports = {

  home_function: function(req, res){

    res.render('index');
  },
  process_function: function(req,res){
    req.session.name = req.body.name;
    req.session.dojo = req.body.dojo;
    req.session.favorite = req.body.favorite;
    req.session.comments = req.body.comments;
    res.redirect('/result');
  },
  result_function: function(req,res){
    res.locals.name = req.session.name;
    res.locals.dojo = req.session.dojo;
    res.locals.favorite = req.session.favorite;
    res.locals.comments = req.session.comments;
    res.render('result');
  }

}
