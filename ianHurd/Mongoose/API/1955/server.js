var express    = require('express'),
    app        = express(),
    path       = require('path'),
    bodyParser = require('body-parser'),
    mongoose   = require('./config/mongoose'),
    port       = 8000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'static')));
require('./config/routes.js')(app);

app.listen(port, function() {
    console.log(`listening on port ${port}`);
})
