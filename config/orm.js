const connection = require("./connection.js");

let orm = {

    all: function(tableInput, cb){
        connection.query("SELECT * FROM " + tableInput, function(err,result) {
            if (err) throw err;
                cb(result);
        })
    },
    create: function(){

    },
    update: function() {

    }
}

module.exports = orm;
