var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var foodData = new Schema({
    foodName: String,
    foodType: String,
    datepur: Date,
    dateexp: Date,
    restrictions: String
  });
  
  //attach schema to model
  var Food = mongoose.model('Food', foodData);
  
  // make this available to our users in our Node applications
  module.exports = Food;