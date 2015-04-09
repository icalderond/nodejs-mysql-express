var express=require("express");
var router=express.Router();

//database
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cdcol'
});
connection.connect(function(err){
	if(!err) {
	    console.log("Base de datos conectada \n\n");  
	} else {
	    console.log("Error connecting database ... \n\n");  
	}
});


//configuracion de los get
router.get("/",function(req,res){
	connection.connect(function(err){
	if(!err) {
	    console.log("Database is connected ... \n\n"); }
	});
	connection.query('SELECT * from cds', function(err, rows, fields) {
		connection.end();
		if (!err)	
		  //res.send(rows);
	  	  res.render("default",{"rows":rows});
	    else
	      console.log('Error while performing Query.');
	});
});

module.exports=router;
