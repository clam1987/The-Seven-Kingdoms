const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");


// Routes
router.use(bodyParser.urlencoded({ extended: true }))


const Quests = require("../models/Quest");

// Create Character route
router.post("/quests", (req, res) => {
  const newQuest = new Quests (req.body);
  newQuest.save()
  .then(quest => {
    console.log("yes");
    req.flash("sucess_msg", "Quest Created");
    res.send("Sucess");
  })
  .catch(err => console.log(err)); 
})

module.exports = router;
