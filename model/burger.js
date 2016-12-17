var orm = require("../controller/config/orm.js");

var burger = {
    selectAll: function (callback) {
        orm.selectAll(function (res) {
            callback(res);
        });
    },

    insertOne: function (params, callback) {
      var duck = params;
      console.log(duck);
        orm.insertOne(duck, function (res) {
            callback(res);
        });
    },

    updateOne: function (params, location, callback) {
        orm.updateOne(params, location, function (res) {
            callback(res);
        });
    },

    deleteAll: function(callback) {
      orm.deleteAll(function (res) {
        callback(res);
      });
    }
};

module.exports = burger;
