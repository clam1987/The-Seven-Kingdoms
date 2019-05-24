const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");


// Routes
router.use(bodyParser.urlencoded({ extended: true }))


const Monsters = require("../models/Monster");


//Get Character Route
router.get("/monsterinfo", (req, res) => {
    res.send("hello")
    // const collection = db.get().collection("monsters")
    // collection.find().toArray(function(err, res) {
    //     res.send(res)
    // })
})

// Create Character route
router.post("/monster", (req, res) => {
  const newMonsters = new Monsters(req.body);
  newMonsters.save()
  .then(monster => {
    console.log("yes");
    req.flash("sucess_msg", "Item Created");
    res.send("Sucess");
  })
  .catch(err => console.log(err)); 
})

module.exports = router;
