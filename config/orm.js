const connection = require("./connection.js");

let orm = {

    all: function (cb) {
        let queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    create: function (table, cols, vals, cb) {
        let queryString = "SELECT * FROM ?? WHERE ?? = ? ";

        return new Promise(function (resolve, reject) {
            connection.query(queryString, [table, cols, vals], function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    },
    update: function (table, col, condition, cb) {
        let queryString = "UPDATE burgers SET ?? WHERE ??";
        return new Promise(function (resolve, reject) {
            connection.query(queryString, [table, col, condition], function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })

    },
    delete: function (table,condition, cb)
}


module.exports = orm;
