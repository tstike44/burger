const express = require("express");
const burger = require("../models/burger");
const router = express.Router();


// Home page route.
router.get('/index', function (req, res) {
    burger.all(function (burgerData) {
      console.log(burgerData)
      res.render("index");
    })
})

// Export routes for server.js to use.
module.exports = router;
