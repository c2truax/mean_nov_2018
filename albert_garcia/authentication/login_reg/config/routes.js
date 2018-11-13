var our_controller = require('../controllers/login_controller');

module.exports = function(app) {
    // /home is the url we are looking for and our_controller.home_function is
    // the function that will run when the server receives a get request.
    app.get('/', our_controller.home_function);
    app.get('/success/:id', our_controller.success_function);
    app.post('/register', our_controller.reg_function);
    app.post('/login', our_controller.login_function);
    app.get('/logout', our_controller.logout_function);
  }