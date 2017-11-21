var express = require('express');
var app = express();
app.use(express.static("public"));
var fs = require('fs');
var formidable = require('express-formidable');



app.get('/get-posts', function(request, response){
  fs.readFile(__dirname+'/data/posts.json', function(error, data){
    if(error){
      console.log('Error reading posts.json: '+error);
      response.status(500);
      response.send(error);
    } else {
      response.send(data.toString());
    }
  });
});

app.post('/create-post', function(request, response){

});

app.listen(3000, function () {
  console.log('Server has started listening on port 3000. ');
});
