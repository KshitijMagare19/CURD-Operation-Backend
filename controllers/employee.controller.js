const express = require('express');

const router = express.Router();
const Employee = require('../models/employee.model');
const ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, resp) => {
    Employee.find()
        .then((data) => {
            resp.send(data);
        }).catch((err) => {
            console.log(err);
        });
})
router.get('/:id', (req, resp) => {
    if(ObjectId.isValid(req.params.id) == false)
        resp.status(400).json({
            error: "Invalid Id is passed, Please check ID."
        })
    else
        Employee.findById(req.params.id)
            .then((data) => {
                if (data) {
                    resp.send(data);
                }
                else {
                    resp.status(404).json({
                        error: "The given : " + req.params.id + " ID not found"
                    })
                }
            }).catch((err) => {
                console.log(err);
            });
})

router.post('/', (req, resp) => {
    Employee.create(req.body)
        .then((data) => {
            resp.status(201).json(data);
        }).catch((err) => {
            console.log(err);
        });
})

module.exports = router;