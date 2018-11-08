var users_controller = require('../controllers/users_controller');

module.exports = function(app) {
  app.get('/', users_controller.index);
  app.get('/new/:name/', users_controller.new);
  app.get('/remove/:name/', users_controller.remove);
  app.get('/:name', users_controller.getone);
}
