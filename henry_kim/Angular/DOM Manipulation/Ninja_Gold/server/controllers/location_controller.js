module.exports = {

  //Get all task
  index: function(req, res){
    console.log(req.body)
      res.json({message: "success"});
  }
}
