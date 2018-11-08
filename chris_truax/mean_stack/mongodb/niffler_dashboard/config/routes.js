var nifflers_controller = require('../controllers/nifflers_controller');

module.exports = function(app) {
  app.get('/', nifflers_controller.index);
  app.post('/nifflers', nifflers_controller.nifflers);
  app.get('/nifflers/new', nifflers_controller.new);
}
