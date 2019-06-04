const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");


// Routes
router.use(bodyParser.urlencoded({ extended: true }))


const Monsters = require("../models/Monster");


// Get Monster Route
router.get('/monster/:id', function (req, res) {
  Monsters.findById(req.params.id, function (err, monster) {
    console.log(monster);
      if (err) return res.status(500).send("There was a problem finding the monster.");
      if (!monster) return res.status(404).send("No monster found.");
      res.status(200).send(monster);
  });
});

// Post Monster route
router.post("/monster", (req, res) => {
  const newMonsters = new Monsters(req.body);
  console.log(req.body);
  newMonsters.save()
  .then(monster => {
    console.log("yes");
    req.flash("sucess_msg", "Monster Created");
    res.send("Sucess");
  })
  .catch(err => console.log(err)); 
});

//Put Monster Route
router.put("/monster/update/:id", (req, res) => {
  Monsters.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, monster) => {
    console.log(req.body);
      if (err) return res.status(500).send("There was a problem updating your monster");
      res.status(200).send(monster);
  })
}); 

// Delete Monster route
router.delete("/delete/monster/:id", (req, res) => {
  Monsters.findByIdAndDelete(req.params.id, (err, monster) => {
    console.log(req.body);
      if (err) return res.status(500).send("There was a problem updating your Monster");
      res.status(200).send(monster);
  })
}); 

module.exports = router;
