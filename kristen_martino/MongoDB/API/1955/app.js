const createError = require('http-errors'),
		express = require('express'),
		path = require('path'),
		bodyParser = require('body-parser'),
		port = 8000;

const app = express();

require('./config/mongoose')

const peopleRouter = require('./routes/people');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/', peopleRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});


module.exports = app;
app.listen(port, function () {
	console.log(`Listening on port ${port}`);
})
