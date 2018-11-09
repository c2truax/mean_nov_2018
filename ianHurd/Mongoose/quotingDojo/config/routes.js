
var users_controller = require('../controllers/users_controller');

module.exports = function(app) {
  app.get('/', users_controller.quotes);
  app.post('/quotes', users_controller.render);
  app.get('/quotes', users_controller.display);
}
