// Lets import our controller. views.py in Django, *_controller.rb in Ruby
// This demo controller exports functions for us to use.
var our_controller = require('../controllers/counter_controller');

module.exports = function(app) {
    // /home is the url we are looking for and our_controller.home_function is
    // the function that will run when the server receives a get request.
    app.get('/', our_controller.home_function);
    app.get('/add', our_controller.add_function);
    app.get('/reset', our_controller.reset_function);
  }