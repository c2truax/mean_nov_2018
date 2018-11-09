const tasks_controller = require('../controllers/tasks_controller');

module.exports = function (app) {
	app.get('/tasks', tasks_controller.tasks);
	app.get('/tasks/:id', tasks_controller.task_id);
	app.post('/tasks', tasks_controller.new);
	app.put('/tasks/:id', tasks_controller.task_update_id);
	app.delete('/tasks/:id', tasks_controller.delete);
};