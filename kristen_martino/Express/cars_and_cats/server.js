var express = require("express"),
  app = express(),
  path = require("path");

app.use(express.static(__dirname + "/static"));

app.listen(8000, function () {
  console.log("listening on 8000");
});
