var express = require('express');
var fs = require ('fs'), index;

//fs.readFile("./index.html", function (err, data) {
//  if (err)  {
//     throw err;
//  }
//  index=data;
//)};
 

var app = express.createServer(express.logger());

app.get('./index.html', function(request, response) {
  response.send("dit werkt wel");
  }
);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
