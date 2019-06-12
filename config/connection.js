// here is where I put the MySQL connections

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burger_db"
})

connection.connect(function(err){
    if(err)throw err;
    console.log(connection.state)
    console.log("connected as id: " + connection.threadid);
});

module.exports = connection;