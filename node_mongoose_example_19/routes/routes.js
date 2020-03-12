
module.exports = function(app) {

    //let's have a global var for our user
    var currentUser;

    //import the User object
    var User = require('../models/user.js') 

    //a get at the root.  this is run when you go to localhost:3000
    app.get('/', function(req, res) {
        res.render('login.ejs')
    });

    //a post, this handles anything sent TO the url at localhost:3000/post
    app.post('/login', function(req, res) {

        // get a user with the given username if it exists        
        User.findOne({ userName:req.body.username }, function(err,user){
            //found one!
            if(user) {
                console.log("Found a user")
                currentUser = user
                res.render("home.ejs",{user:user})
            } else {
                //didn't find a user?  let's make one
                var u = new User({userName:req.body.username,password:req.body.password})
                u.save(function(err,user) {
                    console.log("Made a user:" + user)
                    currentUser = user
                    res.render("home.ejs",{user:user})    
                })
            }
        })
  
    });

    app.post("/addAttributes", function(req,res) {
        
        User.findOne({userName:currentUser.userName}, function(err,user) {
            console.log(user)
            user.name = req.body.name
            user.age = req.body.age
            user.save(function(err,newUser){
                res.render('home.ejs',{user:user})                
            })
        })        
        
    })

}
