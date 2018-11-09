var our_controller = require('../controllers/survey');

module.exports = function(app) {
    // /home is the url we are looking for and our_controller.home_function is
    // the function that will run when the server receives a get request.
    app.get('/', our_controller.home_function);
    app.post('/results', our_controller.submit_function);
    app.get('/results', our_controller.success_function);
    app.get('/goback', our_controller.goback_function);
  }