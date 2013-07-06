var express = require('express');
var fs = require ('fs');

var app = express.createServer(express.logger());
var index;

//index = readFileSync('/index.html');


app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
