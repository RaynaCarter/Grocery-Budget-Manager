// var data1 = { username: "rayna", pass: "pass" };
// var response = {message:"LOGIN SUCCESSFUL, WELCOME TO THE HOME PAGE"}
// var error = {errormess:"LOGIN UNSUCCESSFUL, TRY AGAIN"}
// var express = require('express');
// var app = express();
// app.set('view engine', 'ejs');
// app.use(express.urlencoded());
// app.use(express.json());



var currentUser;


module.exports = function(app) {
    var User = require("../models/user.js")
    var Food = require("../models/food.js")


    app.get('/',function(req, res) {
      
        // res.render("login.ejs");

        //empty search argument
    User.find({}, function(err,users) {
        console.log(users)
        res.render('login.ejs',{results:users})
    })

    });

  

    // app.get('/login', function(req, res) {
        
        
    //     var r = new User({userName:"Rayna",age:16,userName:"RAY",password:"1234"})
    //     r.save(function(err,user) {
    //         console.log(user)
    //         res.render('newPage.ejs',{sendToPage:user})
    //     })
        
    //     User.findOne({userData:req.body.username},function(err, user){
    //         if(user){
    //             console.log("Found a user")
    //             res.render('newPage.ejs',{sendToPage:user})
    //         }

    //     })
    // });



    app.post("/signup", function(req,res){
      
        var newUser= new User({name:req.body.ipname, userName:req.body.ipUsername, password:req.body.ipPassword, age:req.body.ipAge, animals:req.body.animals })
        console.log(newUser)
        newUser.save(function(err,user){
                console.log(user)
                res.redirect('/')

    })

        })
        

    app.post("/createfood", function(req,res){
         
        var newFood= new Food({foodName:req.body.foodname, foodType:req.body.type, datepur:req.body.date, dateexp:req.body.expiration, restrictions:req.body.restrictions })
        console.log(newFood)
        newFood.save(function(err,food){
                console.log(food)
                res.render('newPage.ejs',{sendToPage:currentUser})
    
         })
    })
    app.post("/signin", function(req,res){
        User.findOne({ userName:req.body.username }, function(err,user){
            //found one!
            console.log(user);
            currentUser = user;
            res.render('newPage.ejs',{sendToPage:user})
        })
    
    })
    
    
    app.get("/createfood",function(req, res) {
      
        // res.render("login.ejs");

        //empty search argument
    Food.find({}, function(err,users) {
        console.log(foods)
        res.render('newPage.ejs',{results:foods})
    })

    });

    
}

