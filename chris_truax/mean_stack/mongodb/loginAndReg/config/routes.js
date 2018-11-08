var users_controller = require('../controllers/users_controller');

module.exports = function(app) {
  app.get('/', users_controller.index);
  app.post('/register', users_controller.register);
  app.post('/login', users_controller.login);
  app.get('/success', users_controller.success);
  app.get('/logout', users_controller.logout);
}
