const Survey = require("../models/survey.js");
const Company = require("../models/company.js");
const Elevation = require("../models/elevation.js");
const Legal = require("../models/legal.js");
const User = require("../models/user.js");
const Ordered = require("../models/ordered.js");


module.exports = function(app) {
  //first route will get back all the survey orders in the db
  app.get("/api/orders", function(req, res) {
	   	Survey.selectAll(function(data){
	    res.send(data);
	  });
  });

  //route 
  app.get("/api/number", function(req, res) {
  		//get last record
  		Survey.getLastOne(function(data){
  			res.send(data);
        console.log(data);
  		});
  });

  app.get("/api/companyId", function(req, res) {
      //get last record
      Company.getLastOne(function(data){
        res.send(data);
        console.log(data);
      });
  });

  app.get("/api/companies", function(req, res) {

      Company.selectInfo(function(data){
        console.log(data);
        res.send(data);
      });
  });

    app.get("/api/company/:cid", function(req, res) {
      //getOne: function(table, col1, val, col2, cb)
      console.log(req.params.cid);
      Company.getOne(req.params.cid, function(data){
        res.send(data);
      });
  });   

  app.get("/api/user/:uuid", function(req, res){
    console.log(req.params.uuid);
    User.getOne(req.params.uuid, function(data){
      res.send(data);
    });

  });

  app.post("/api/createorder", function(req, res){
    console.log("creaqateorder: " +req.body);

    //Ordered.insert(cols, vals, function(result){

    //});
  });

  //these are the posts
  app.post("/api/create", function(req, res) {
  	var cols = [];
  	var vals = [];
  	//insert new survey order
  	for (var key in req.body) {
    	//the key is the name of the table
    	//console.log(key);
    	var obj = req.body[key];

	    for (var prop in obj) {
	    	cols.push(prop);
	        vals.push(obj[prop])// your code

    	}
    	//check to see which insert statement
    	if(key === "company"){
    		//company insert
    		Company.insert(cols, vals, function(result){
    			//res.send(result);
    		});
    	}
    	else if(key === "survey"){
    		//survey insert
    		Survey.insert(cols, vals, function(result){
    			//res.send(result);
    		});
    	}
    	else if(key === "elevation"){
    		Elevation.insert(cols, vals, function(result){
    			//res.send(result);
    		});
    	}
      else if(key === "ordered"){
        Ordered.insert(cols, vals, function(result){

        });
      }
    	else if(key === "legal"){
    		Legal.insert(cols, vals, function(result){
    			//res.send(result);
    		});
    	}
	    cols = [];
	    vals= [];
	}
  });

  app.delete("/api/authors/:id", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
 });

};