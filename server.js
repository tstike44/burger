const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

const exphbs = require ("express-handlebars");

const routes = require("./controllers/burgers_controllers");


app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));

app.set("view engine", "handlebars");


app.use(express.static(__dirname + "/public"));
app.use(routes)

app.listen(PORT, function(){
	console.log("app now listening at localhost:" + PORT);
})