var express = require('express'),
      app = express(),
      path = require('path'),
      mongoose = require('./config/mongoose.js'),
      bodyParser = require('body-parser');

app.use(bodyParser.json());
require('./config/routes.js')(app);

app.listen(8000, function() {
  console.log(`listening on port 8000`);
});
