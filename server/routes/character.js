const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");


// Routes
router.use(bodyParser.urlencoded({ extended: true }))


const Character = require("../models/Character");

// Create Character route
router.post("/character", (req, res) => {
  const newCharacter = new Character (req.body);
  newCharacter.save()
  .then(character => {
    console.log("yes");
    req.flash("sucess_msg", "Character Created");
    res.send("Sucess");
  })
  .catch(err => console.log(err)); 
  console.log("Character Created");
})

module.exports = router;
