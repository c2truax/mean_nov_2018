var gold_controller = require('../controllers/gold_controller');

module.exports = function(app) {
  app.get('/', gold_controller.index);
  app.post('/', gold_controller.new);
  app.post('/update', gold_controller.update);
  // app.post('/:id', gold_controller.savegold);
}
