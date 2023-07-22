const express = require('express');
const bodyParser = require('body-parser');


//local import
const connectDB = require('./db');
const employeeRouter = require('./controllers/employee.controller')
const app = express();

//middleware
app.use(bodyParser.json());
app.use('/api/employee',employeeRouter);


connectDB()
    .then(() => {
        console.log("connected to db");
        app.listen(3000, () => {
            console.log("Server started at port 3000 :)")
        });
    }).catch((err) => {
        console.log(err);
    });