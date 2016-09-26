var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var mongoURI = "mongodb://localhost:27017/Heroes";
var MongoDB = mongoose.connect(mongoURI).connection;
var Heroes = require('../models/superHeroes');

//use bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// set port
app.set("port", (process.env.PORT || 3030));

//spin up the server
app.listen(app.get("port"), function(){
  console.log("listening on:", app.get("port"));
});//end spin up server

// mongo db connection error handeling
MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});

//base url hit
app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
});// end base url

// set up public as static
app.use(express.static('public'));

// get heroes route
app.get('/heroes', function(req, res){
  console.log("hit heroes route");
  Heroes.find({}, function(err, heroesResults){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
      else{
        console.log(heroesResults);
        res.send(heroesResults);
      }
    });//end call back
});//end get heroes

//post heroes route
app.post('/heroes', function(req, res){
  console.log("hit post heroes");
  //create hero object
  var newHero = new Heroes({
    alias: req.body.alias,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    city: req.body.city,
    power_name: req.body.power_name
  });// end new hero

  // save hero
  newHero.save(function(err){
    if(err){
      console.log("error occurred:", err);
    }
    else{
      console.log('Hero Added');
      res.sendStatus(201);
    }
  });// end newHero save

});

//delte heroes route
app.delete('/heroes', function(req, res){
   console.log('hit delete route with:',req.body);
  Heroes.findByIdAndRemove({"_id":req.body._id}, function(){
    console.log("Hero "+ req.body.id +" has been deleted.");
    res.send(200);
  });// end callback
});// end delete route

//enum route
app.get('/heroes/enum', function(req, res) {
  res.send(Heroes.schema.path('power_name').enumValues);
});
