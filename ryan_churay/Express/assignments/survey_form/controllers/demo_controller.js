// Export functions for our routes.js file to use. This is where the logic of
// your server will go.
module.exports = {

  index: function(req, res){
    res.render('index');
  },

  result: function(req, res){
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.about = req.body.about;

    res.redirect('/views/results')
  },

  results: function(req, res, data){
    data = req.session;
    res.render('success', {data: data})
  }

}
