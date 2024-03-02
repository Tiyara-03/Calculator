const bodyParser = require('body-parser');
const express = require('express');
const app = express();


//Express specific stuff
app.use('/static', express.static('static')) //For serving static files
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.post("/", (req,res) => res.send("Thank you for posting this"));

app.listen(3000,()=> console.log("the server started sucessfully"));
