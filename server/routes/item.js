const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");


// Routes
router.use(bodyParser.urlencoded({ extended: true }))


const Items = require("../models/Item");

// Create Character route
router.post("/item", (req, res) => {
  const newItems = new Items (req.body);
  newItems.save()
  .then(item => {
    console.log("yes");
    req.flash("sucess_msg", "Item Created");
    res.send("Sucess");
  })
  .catch(err => console.log(err)); 
})

module.exports = router;
