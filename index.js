const express = require("express");
const bodyParser = require("body-parser")
const App = express();

App.use(bodyParser.urlencoded({ extended: true }));

App.get("/", (req, res) => res.sendFile(__dirname + "./index.html"));

App.post("/", (req,res)=>{
    let sum = req.body.num1 + req.body.num2
    res.send("your result is" +sum);
});

// App.post("/Add",(req,res)=>{
//     var num1 = Number(req.body.num1);
//     var num2  = Number(req.body.num2);
//     var result = num1 + num2;    
//     res.send("The answer is " + result);
// });

// App.post("/Sub",(req,res)=>{
//     var num1 = parseInt(req.body.num1);
//     var num2 = parseInt(req.body.num2);
//     var result = num1 - num2;
//     res.send("The answer is" + result);
// });


App.listen(80, () => console.log("The server started sucessfully on server 80"));
