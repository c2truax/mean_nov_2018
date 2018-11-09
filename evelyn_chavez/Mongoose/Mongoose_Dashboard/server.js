var express    = require('express'),
    app        = express(),
    path       = require('path'),
    bodyParser = require('body-parser'),
    mongoose   = require('./config/mongoose'),
	session	   = require('express-session');    
    port       = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'keepitsecret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000 }
}))
const flash = require('express-flash');
app.use(flash());

app.use(express.static(path.join(__dirname, 'static')));
app.set(path.join('views', __dirname, 'views'));
app.set('view engine', 'ejs');
require('./config/routes.js')(app);

app.listen(port, function() {
    console.log(`listening on port ${port}`);
})
