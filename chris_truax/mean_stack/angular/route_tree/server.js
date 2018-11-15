var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser'),
    path       = require('path'),
    port       = 8000;
    
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(port, function() {
    console.log(`listening on port ${port}`);
})
