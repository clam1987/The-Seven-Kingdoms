const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
// Welcome Page
router.get("/", (req, res) => res.send("Welcome"));

//dashbard view
router.get("/dashboard", (req, res) => 
res.send("Dashboard" 
    // ,{name: req.user.name}
));

module.exports = router;