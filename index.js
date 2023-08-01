// Creates express server 
const express=require('express');

//creating the path to the index.html file
const path=require('path');

//creating a bodyparser instance to handle incoming request bodies
//in the middleware 
const bodyParser=require("body-parser");
//create express server instance
const app=express();


app.use(bodyParser.urlencoded({extended:true}));

//setting the router handler for the index page

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//the post request gets the data from the html body and sends it to the web page
app.post('/', (req, res) =>{
var num1= parseFloat(req.body.num1);
var num2= parseFloat(req.body.num2);
var result=num1+num2;
res.send("The answer is "+result);
});

//creating a variable for the port to listen on by providing an alternative port
//in case the environment port is no available
const PORT=process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));

