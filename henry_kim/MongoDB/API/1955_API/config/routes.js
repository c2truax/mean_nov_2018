var api_controller = require('../controllers/API_controller');

module.exports = function(app) {
  app.get('/', api_controller.index);
  app.get('/new/:name/', api_controller.create_people);
  app.get('/remove/:name/', api_controller.remove_people);
  app.get('/:name', api_controller.profile);
}
