//In this file we will create mySQL commands 
const connection = require("../config/connection.js");

// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
};


const orm = {

	getOne: function(table, col1, val, col2, cb){
		/*var queryString = "SELECT ? FROM ?? WHERE ? = ?";
		connection.query(queryString,[col1, table, col2, val], function(err, result){
			if(!!err)
				throw err;
			cb(result);
		});*/
		var queryString ="SELECT ?? FROM ?? WHERE ?? = ?";
		connection.query(queryString,[col1,table,col2,val],function(err, result){
			if(!!err)
				throw err;
			cb(result);
		});

	},

	selectAll: function(table, cb){
		var queryString = "SELECT * FROM ??";
		connection.query(queryString,[table], function(err, result){
			if(!!err)
				throw err;
			cb(result);

		});
	},

	getLastOne: function(cb){
		var queryString = "";
		connection.query("SELECT snum FROM survey ORDER BY snum DESC LIMIT 1", function(err, result){
			if(!!err)
				throw err;
			cb(result);
		});

	},

	//sql insert statement
	insertOne: function(table, cols, vals, cb){
		var queryString = "INSERT into " + table;

		//build the query
		queryString += " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ") ";
		console.log(queryString);
		console.log(vals);

		connection.query(queryString, vals, function(err, result){
			if(!!err)
				throw err;
			console.log("Inserted");
			cb(result);
		});

	},

	updateOne: function(id, cb){
		var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
		connection.query(queryString, [id], function(err, result){
			if(!!err)
				throw err;
			cb(result);

		});
	}
};

module.exports = orm;

