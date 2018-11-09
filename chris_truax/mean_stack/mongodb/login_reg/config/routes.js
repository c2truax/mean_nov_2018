var mb_controller = require('../controllers/mb_controller');

module.exports = function(app) {

  app.get('/', mb_controller.index);
  app.post('/message', mb_controller.message);
  app.post('/comment', mb_controller.comment);

}
