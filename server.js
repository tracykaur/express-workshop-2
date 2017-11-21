var express = require('express');
var app = express();

app.get("/hello", function (request, response) {
  response.send("Hello World!");
});
app.listen(3000, function () {
  console.log('Server has started listening on port 3000. ');
});
