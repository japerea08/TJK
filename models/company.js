const orm = require("../config/orm.js");

//functions to call the orm functions
const company = {
  selectAll: function(cb){
    //call the orm function
    orm.selectAll("company", function(res){
      cb(res);
    });
  },

  insert: function(cols, vals, cb){
    orm.insertOne("company",cols, vals, function(res){
      cb(res);
    });
  },


  update: function(id, cb){
    orm.updateOne(id, function(res){
      cb(res);
    });
  }

};

module.exports = company;
