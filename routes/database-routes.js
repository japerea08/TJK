const Survey = require("../models/survey.js");
const Company = require("../models/company.js");
const Elevation = require("../models/elevation.js");
const Legal = require("../models/legal.js");


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
  			console.log(data);
  			res.send(data);
  		});
  });

  //these are the posts
  app.post("/api/create", function(req, res) {
  	var cols = [];
  	var vals = [];
  	//insert new survey order
  	for (var key in req.body) {
    	// skip loop if the property is from prototype
    	//if (!req.body.hasOwnProperty(key)) continue;
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
    	else if(key === "legal"){
    		Legal.insert(cols, vals, function(result){
    			//res.send(result);
    		});
    	}
    	/*console.log(key);
    	for(var i = 0; i < vals.length; i++){
    		console.log(cols[i]+" "+vals[i]);
    	}*/
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