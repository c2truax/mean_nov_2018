var cats_controller = require('../controllers/cats_controller');

module.exports = function(app) {
    app.get('/', cats_controller.index);
    app.get('/cats/new', cats_controller.new);
    app.post('/cats', cats_controller.create);
    app.get('/cats/:id', cats_controller.display);
    app.get('/cats/edit/:id', cats_controller.edit);
    app.post('/cats/:id', cats_controller.update);
    app.get('/cats/destroy/:id', cats_controller.destroy);

}
