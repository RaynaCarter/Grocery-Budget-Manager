var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userData = new Schema({
    name: String,
    userName: String,
    password: String,
    age: Number,
  
  });

  //attach schema to model
var User = mongoose.model('User', userData);

// make this available to our users in our Node applications
module.exports = User;

