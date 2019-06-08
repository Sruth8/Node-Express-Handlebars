var express = require("express");
//var mysql = require("mysql");
//var methodOverride = require ('method-override');
var bodyParser = require("body-parser");

var PORT = process.env.PORT || process.env.DEV_PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "public"));
//app.use(express.static('public'));

// Parse application body
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: false
  }))

// Set Handlebars.
var exphbs = require("express-handlebars");

//app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// this will refer back to the burgers_controller.js
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});