var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js'); // referance to burger.js file




router.get("/", function(req,res){
    burger.all(function(burgerInfo){ //passing burgerInfo into the function
        console.log(burgerInfo);
        res.render("index", (burgerInfo));
    })
    
})

router.put("/burgers/update", function(req,res){
    burger.update(req.body.burgerInfo, function(result){
        console.log(result);
        res.redirect("/");
    });
});

module.exports = router;