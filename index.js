const express = require("express");
const bodyparser = require("body-parser");
const App = express();

App.use(bodyparser.urlencoded({extended:true}));


App.get("/", (req,res)=> res.sendFile(__dirname + "/index.html"));


App.listen(3000, ()=> console.log("The server started sucessfully on port 3000"));