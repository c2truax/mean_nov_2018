var express    = require('express'),
    app        = express(),
    path       = require('path'),
    bodyParser = require('body-parser'),
    port       = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.set(path.join('views', __dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static( __dirname + '/public/dist/public' ));

app.listen(port, function() {
    console.log(`listening on port ${port}`);
})
