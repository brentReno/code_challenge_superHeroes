var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var mongoURI = "mongodb://localhost:27017/superHeroes";
var MongoDB = mongoose.connect(mongoURI).connection;

// set port
app.set("port", (process.env.PORT || 3030));

//spin up the server
app.listen(app.get("port"), function(){
  console.log("listening on:", app.get("port"));
});//end spin up server

//base url hit
app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
});// end base url

// set up public as static
app.use(express.static('public'));
