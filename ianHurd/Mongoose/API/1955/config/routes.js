var API_controller = require('../controllers/API_controller');

module.exports = function(app) {
  app.get('/', API_controller.all);
  app.get('/new/:name/', API_controller.create_boomer);
  app.get('/remove/:name/', API_controller.kill_boomer);
  app.get('/:name', API_controller.one);
}
