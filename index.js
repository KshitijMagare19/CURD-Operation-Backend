const express = require('express');
const bodyParser = require('body-parser');



const app = express();

//middleware
app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log("Server started at port 3000 :)")
});