

var data1 = { username: "rayna", pass: "pass" };
var response = {message:"LOGIN SUCCESSFUL, WELCOME TO THE HOME PAGE"}
var error = {errormess:"LOGIN UNSUCCESSFUL, TRY AGAIN HOE"}

var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'))
require('./routes/routes.js')(app);
var mongoose = require('mongoose');
//lower in the doc
mongoose.connect("mongodb+srv://raynacar:Soccergal123@cluster0-j2ni9.mongodb.net/test?retryWrites=true&w=majority");


app.listen(3000);
console.log("Listening at localhost:3000")
