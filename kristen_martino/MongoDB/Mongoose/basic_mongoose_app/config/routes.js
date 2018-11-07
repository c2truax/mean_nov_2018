// routes.js == urls.py in Django
// import our controller (views.py in Django)
const user_controller = require('../controllers/user_controller');

module.exports = function (app) {
	// Root Route
	app.get('/users', user_controller.users);
	// Add User Request
	app.post('/users/add', user_controller.add);
};
