var login_controller = require('../controllers/login_controller');
var post_controller = require('../controllers/post_controller');

module.exports = function(app) {
	app.get('/', login_controller.index);
	app.post('/login', login_controller.login);
	app.post('/register', login_controller.register);
	app.get('/wall', login_controller.wall);
	app.post('/message', post_controller.create_message);
}
