const express = require('express'),
    app = express(),
    path = require('path'),
    server = app.listen(60000),
    io = require('socket.io')(server);

let click_count = 0;

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});

io.on('connection', function (socket) {
    console.log('\n=> Client/socket is connected!');
    console.log('=> Client/socket id is ', socket.id);

    socket.on('epic_button_pressed', function () {
        console.log('Someone clicked the epic button!');
        click_count++;
        io.emit('button_update', click_count);
    });

    socket.on('reset_button_pressed', function () {
        console.log('Someone clicked reset!');
        click_count = 0;
        io.emit('button_update', click_count);
    });
});