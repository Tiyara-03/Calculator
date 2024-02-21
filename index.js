const express = require("express");
const bodyparser = require("body-parser");
const App = express();
const path = require("path");

App.use(bodyparser.urlencoded({extended:true}));

// App.use(express.static('public'));
App.use(express.static(path.join(__dirname, 'public')));
// App.use(express.urlencoded());


App.get("/", (req,res)=> res.sendFile(__dirname + "/index.html"));


App.listen(3000, ()=> console.log("The server started sucessfully on port 3000"));