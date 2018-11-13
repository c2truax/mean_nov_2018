var dogs_controller = require('../controllers/dog_controller');

module.exports = function(app) {
  app.get('/', dogs_controller.home_function);
  app.get('/dog/new', dogs_controller.new_function);
  app.post('/dog', dogs_controller.create_function);
  app.get('/dog/:id', dogs_controller.show_function);
  app.get('/dog/edit/:id', dogs_controller.edit_function);
  app.post('/dog/:id', dogs_controller.update_function);
  app.post('/dog/destroy/:id', dogs_controller.destroy_function);


}
