const express = require("express");
const router = express.Router();

const Character = require("../models/User");

// Create Character route
router.post("/login/character", (req, res) => {
  const newCharacter = new Character ({
    name,
    hp,
    str,
    def,
    spd,
    lck,
    gold
  });
  newCharacter.save()
  .then(character => {
    console.log("yes");
    req.flash("sucess_msg", "Character Created");
    res.redirect("/");
  })
  .catch(err => console.log(err)); 
  console.log("Character Created");
})