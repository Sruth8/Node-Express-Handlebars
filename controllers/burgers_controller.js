var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js'); // referance to burger.js file




//set up the router here

router.get("/", function(req,res){
    burger.all(function(burgerInfo){ //passing burgerInfo into the function
        console.log(burgerInfo);
        res.render("index", 
        {burgerInfo});
    })
    
})

router.put("/burgers/update", function(req,res){
    burger.update(req.body.burgerInfo, function(result){
        console.log(result);
        res.redirect("/");
    });
});
//this will post the burger that was created by the user
router.post("/burgers/create", function(req,res){
    burger.create(req.body.burger_name, function(result){
        console.log(result);
         res.redirect("/");
    })

})

module.exports = router;