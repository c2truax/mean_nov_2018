var our_controller = require('../controllers/quote_controller');

module.exports = function(app) {
    // /home is the url we are looking for and our_controller.home_function is
    // the function that will run when the server receives a get request.
    app.get('/', our_controller.home_function);
    app.post('/quotes', our_controller.submit_function);
    app.get('/quotes', our_controller.success_function);

  }