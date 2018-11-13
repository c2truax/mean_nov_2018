var task_controller = require('../controllers/task_controller');

module.exports = function(app) {
  app.get('/tasks', task_controller.index);
  app.get('/tasks/:id', task_controller.profile);
  app.post('/task', task_controller.create_task);
  app.put('/update/:id', task_controller.update_task);
  app.delete('/delete/:id', task_controller.remove_task);
}
