// urls.py in Django
// Import our controller (views.py in Django)
var controller = require('../controllers/controller');

module.exports = function (app) {
    // /home is the url we are looking for and our_controller.home_function is
    // the function that will run when the server receives a get request.
    app.get('/cats', controller.cats);
    app.get('/:cat_name', controller.details);
};
