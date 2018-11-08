var Task = require('../models/task');

module.exports = {
  tasks: function(req, res){
    Task.find({}, function(err,tasks){
      res.json({err: err, tasks: tasks});
    });
  },
  new: function(req, res){
    var task = new Task({title: req.body.title, description: req.body.description});
    task.save(function(err, task) {
      res.json({err: err, task: task});
    });
  },
  delete: function(req, res){
    Task.findByIdAndRemove(req.params.id, function(err,task){
      res.json({err: err, task: task});
    });
    
  },
  task_id: function(req, res){
    Task.findById(req.params.id, function(err,task){
      res.json({err: err, task: task});
    });
  },
  task_update_id: function(req, res){
    Task.findByIdAndUpdate(req.params.id, {title: req.body.title, description: req.body.description}, function(err,task){
      res.json({err: err, task: task});
    });
  }
}
