const orm = require("../config/orm.js");

//functions to call the orm functions
const legal = {
  selectAll: function(cb){
    //call the orm function
    orm.selectAll("survey", function(res){
      cb(res);
    });
  },

  getLastOne: function(cb){
    orm.getLastOne(function(res){
      cb(res);
    });
  },

  insert: function(cols, vals, cb){
    orm.insertOne("legal_desc",cols, vals, function(res){
      cb(res);
    });
  },

  update: function(id, cb){
    orm.updateOne(id, function(res){
      cb(res);
    });
  }

};

module.exports = legal;