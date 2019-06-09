var connection = require("./connection.js");
// this is a connection query that will select from the table input and then use a call back 
// to pass the result to the next file in the system contained in the models folder
var orm = {
    all: function (tableInput, callBack) {
        connection.query("SELECT * FROM " + tableInput + ";", function (err, result) {
            if (err) throw err;
            callBack(result)
        })
    },


    update: function(tableInput, condition, callBack) {
        connection.query("UPDATE " + tableInput + "SET devoured=true WHERE id= " + condition + ";", function(err,result){
            if (err)throw err;
            callBack
        })
    }



}




module.exports = orm;





// selectAll()
// insertOne()
// updateOne()