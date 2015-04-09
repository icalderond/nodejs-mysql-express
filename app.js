var express=require("express");
var path=require("path");

//configuracion servidor
var app=express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"node_modules/bootstrap/dist")));
app.use(require("./todos"));

var server=app.listen(3000,function(){
	console.log("Servidor Encendido")
});


//CHECAR
//res.redirect("/")

//app.use("/apis",require("todos"));

/*
app.get("/",function(req,res){
	res.send("This is the first activity");
});
app.get("/sing-in/:name",function(req,res){
	res.send("you are in log-in as: "+req.params.name);
});
app.get("/users/",function(req,res){
	res.send("you are in log-in as: ID");
});*/