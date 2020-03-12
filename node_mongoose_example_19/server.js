//adding Express and Cors
var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var cors = require('cors')

//create an instance of Express and allow 
//node to easily grab items send by 
//your view like "req.body.data"
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

require('./routes/routes.js')(app)


//connect to db
mongoose.connect("mongodb+srv://raynacar:Soccergal123@cluster0-j2ni9.mongodb.net/test?retryWrites=true&w=majority")



//ok, start the server and be ready!
app.listen(3000);
console.log("Meow...at localhost:3000")

