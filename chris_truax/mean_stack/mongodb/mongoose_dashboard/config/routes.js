var users_controller = require('../controllers/users_controller');

module.exports = function(app) {

  app.get('/', users_controller.index);
  app.get('/dogs/new', users_controller.new);
  app.get('/dogs/:id', users_controller.dog_id);
  app.post('/dogs', users_controller.dogs);
  app.get('/dogs/edit/:id', users_controller.edit_dog);
  app.post('/dogs/edit/process/:id', users_controller.edit_process);
  app.get('/dogs/destroy/:id', users_controller.destroy);

}
