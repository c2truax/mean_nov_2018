var path     = require('path'),
    fs       = require('fs'),
    mongoose = require('mongoose');

// MAKE SURE YOU CHANGE THE NAME OF YOUR DB HERE!
mongoose.connect('mongodb://localhost/user_db', { useNewUrlParser: true })

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
});
