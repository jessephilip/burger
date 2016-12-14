var orm = require("../controller/config/orm.js");
console.log(orm);

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

    updateOne: function (params, locCol, locVal, callback) {
        orm.updateOne(params, locCol, locVal, function (res) {
            callback(res);
        });
    }


};

module.exports = burger;
