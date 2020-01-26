const express = require("express");
const router = express.Router();
const burger = require('../models/burger');

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    burger.all((data) => {
        var newObj = {
            burger: data
        };
        res.render("index", newObj);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create([req.body.name], result => {
        const newObj = {
            burger_name: req.body.name
        };
        res.json({ id: result.insertId });
    })

})

module.exports = router;