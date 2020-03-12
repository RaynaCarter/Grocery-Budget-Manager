// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var catSchema = new Schema({
  name: String,
  breed: String,
  age: Number
});

//attach schema to model
var Cat = mongoose.model('Cat', catSchema);

// make this available to our users in our Node applications
module.exports = Cat;
