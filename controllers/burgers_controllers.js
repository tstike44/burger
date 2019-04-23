const burger = require("../models/burger");

const express = require("express");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
// Home page route.
router.get('/index', function (req, res) {
  res.send('Hello');
})

router.post("/api/burgers", function(req, res) {
  burger.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {});

// Export routes for server.js to use.
module.exports = router;
