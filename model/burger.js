var orm = require("../controller/config/orm.js");
console.log(orm);

var burger = {
    selectAll: function (callbback) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },

    insertOne: function (params, callback) {
        orm.insertOne(params, function (res) {
            callback(res);
        });
    },

    updateOne: function (params, locCol, locVal, callback) {
        orm.updateOne(params, locCol, locVal, function (res) {
            callback(res);
        });
    }


};