var users_controller = require('../controllers/users_controller');

module.exports = function(app) {
  app.get('/', users_controller.index);
  app.post('/quotes', users_controller.add);
  app.get('/quotes', users_controller.quotes);
}
