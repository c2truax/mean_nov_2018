var our_controller = require('../controllers/gold_controller');

module.exports = function(app) {
    // /home is the url we are looking for and our_controller.home_function is
    // the function that will run when the server receives a get request.
    app.get('/', our_controller.home_function);
    app.post('/messages/new', our_controller.new_function);
    app.post('/messages/:id/new_comment', our_controller.create_function);
  }