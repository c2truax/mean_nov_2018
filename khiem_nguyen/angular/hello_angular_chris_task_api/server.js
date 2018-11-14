var express    = require('express'),
    app        = express(),
    path       = require('path'),
    bodyParser = require('body-parser'),
    mongoose   = require('./config/mongoose'),
    port       = 8000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'static')));
app.set(path.join('views', __dirname, 'views'));
app.set('view engine', 'ejs');
require('./config/routes.js')(app);
app.use(express.static(path.join(__dirname, 'angular-app', 'dist', 'angular-app')));

app.listen(port, function() {
    console.log(`listening on port ${port}`);
})
