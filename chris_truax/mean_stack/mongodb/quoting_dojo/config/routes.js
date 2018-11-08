var quotes_controller = require('../controllers/quotes_controller');

module.exports = function(app) {
  app.get('/', quotes_controller.index);
  app.post('/quote', quotes_controller.quote);
  app.get('/quotes', quotes_controller.quotes);
}
