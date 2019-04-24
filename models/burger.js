var orm = require("../config/orm");


const burger = {
	all: function (cb) {
		orm.all("burgers", function (res) {
			cb(res);
		});
	},
	
	create: function (cols, vals, cb) {
		orm.create("burgers", cols, vals, function (res) {
			cb(res);
		});
	},
	update: function (id, cb) {
		orm.update("burgers", id, cb, function (res) {
			cb(res)
		});
	}
};

//exporting database functions for the controller
module.exports = burger;