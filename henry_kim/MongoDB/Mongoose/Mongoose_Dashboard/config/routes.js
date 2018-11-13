var otter_controller = require('../controllers/otter_controller');

module.exports = function(app) {
  app.get('/', otter_controller.index);
  app.post('/otters/create', otter_controller.create_otter);
  app.get('/otters/new', otter_controller.new);
  app.get('/otters/:id', otter_controller.profile);
  app.post('/otters/:id', otter_controller.update_otter);
  app.get('/otters/edit/:id', otter_controller.edit);
  app.post('/otters/destroy/:id', otter_controller.destroy);
}
