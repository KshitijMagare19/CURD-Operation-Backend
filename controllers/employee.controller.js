const express = require('express');

const router = express.Router();
const Employee = require('../models/employee.model');

router.get('/',(req,resp) =>{
    Employee.find()
    .then((data) => {
        resp.send(data);
    }).catch((err) => {
        console.log(err);
    });
})

router.post('/',(req,resp) =>{
    Employee.create(req.body)
    .then((data) => {
        resp.status(201).json(data);
    }).catch((err) => {
        console.log(err);
    });
})

module.exports = router;