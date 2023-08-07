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



//creating a variable for the port to listen on by providing an alternative port
//in case the environment port is no available
const PORT=process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));

