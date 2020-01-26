const express = require("express");
const router = express.Router();
const burger = require('../models/burger');

// call selectAll function via burger model
router.get("/", (req, res) => {
    burger.all((data) => {
        var newObj = {
            burger: data
        };
        res.render("index", newObj);
    });
});

// call insertOne function via burger model
router.post("/api/burgers", (req, res) => {
    burger.create(req.body.name, result => {
        const newObj = {
            burger_name: req.body.name
        };
        res.json({ id: result.insertId });
    });
});

// call updateOne function via burger model 
router.put("/api/burgers/:id", (req, res) => {
    // function takes two arguments: devourstate as JSON and the id as a url param
    burger.update(req.body.devoured, req.params.id, result => {
        // call function and set http status of result
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
})

module.exports = router;