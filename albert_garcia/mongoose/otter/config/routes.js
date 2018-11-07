var our_controller = require('../controllers/otter_controller');

module.exports = function(app) {
    // /home is the url we are looking for and our_controller.home_function is
    // the function that will run when the server receives a get request.
    app.get('/', our_controller.home_function);
    app.get('/otters/new', our_controller.new_function);
    app.post('/otters', our_controller.create_function);
    app.get('/otters/:id', our_controller.show_function);
    app.get('/otters/edit/:id', our_controller.edit_function);
    app.post('/otters/:id', our_controller.update_function);
    app.post('/otters/destroy/:id', our_controller.destroy_function)
  }