var our_controller = require('../controllers/1955_controller');

module.exports = function(app) {
    // /home is the url we are looking for and our_controller.home_function is
    // the function that will run when the server receives a get request.
    app.get('/', our_controller.home_function);
    app.get('/new/:name', our_controller.new_function);
    app.get('/remove/:name', our_controller.remove_function);
    app.get('/:name', our_controller.show_function);
  }