const location = require('../controllers/location_controller')

module.exports = function(app) {
  app.get('/:location', location.index);
}
