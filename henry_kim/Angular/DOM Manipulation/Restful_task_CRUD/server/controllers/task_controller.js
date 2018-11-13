var Task = require('../models/task');

module.exports = {

  //Get all task
  index: function(req, res){
      Task.find({}, function(err, task){
        res.json({err: "", data: task})
    });
   },

  create_task: function(req, res) {
    console.log(req.body);
    task = new Task({title: req.body.title, description: req.body.description, completed: req.body.completed});
    task.save(function(err) {
      if (err) {
        console.log('returned error', err);
        res.json({err: err, data: ""})
       } else {
        res.json({err: "SUCCESS", data: task});
       }
     })
    },

  remove_task: function(req, res) {
    console.log("Starting to delete");
    Task.deleteOne({_id: req.params.id}, function(err) {
      if(err){
        console.log("Could not delete properly");
        res.json({err: "FAILED", data:""})
      }else{
      res.json({err: "", data: ""});
      }
    });
  },

profile: function(req, res) {
  Task.findOne({_id: req.params.id}, function(err, task){
      if(err){
         console.log("Returned error", err);
         res.json({err: err, data: ""})
      }
      else {
         res.json({err: "", data: task})
      }
   })
  },

  update_task: function(req, res){
    console.log(req.body)
    Task.findByIdAndUpdate({_id: req.params.id}, {$set:{title:req.body.title, description:req.body.description, completed: req.body.completed}}, function(err, task){
      if(err){
        console.log("failed to update", err);
        res.json({err: err, data:""})
      }else{
        res.json({err:"SUCCESS", data: task});
      }
    });
  },

}
