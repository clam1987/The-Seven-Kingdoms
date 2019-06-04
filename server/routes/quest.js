const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");


// Routes
router.use(bodyParser.urlencoded({ extended: true }))


const Quests = require("../models/Quest");


// Get Quest Route
router.get('/quest/:id', function (req, res) {
  Quests.findById(req.params.id, function (err, quest) {
    console.log(quest)
      if (err) return res.status(500).send("There was a problem finding the quest.");
      if (!quest) return res.status(404).send("No quest found.");
      res.status(200).send(quest);
  });
});

// Post Quest route
router.post("/quests", (req, res) => {
  const newQuest = new Quests (req.body);
  newQuest.save()
  .then(quest => {
    console.log("yes");
    req.flash("sucess_msg", "Quest Created");
    res.send("Sucess");
  })
  .catch(err => console.log(err)); 
});

// Put Quest Route
router.put("/quest/update/:id", (req, res) => {
  Quests.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, quest) => {
    console.log(req.body);
      if (err) return res.status(500).send("There was a problem updating your Quest");
      res.status(200).send(quest);
  })
}); 

// Delete Quest Route
router.delete("/delete/quest/:id", (req, res) => {
  Quests.findByIdAndDelete(req.params.id, (err, quest) => {
    console.log(req.body);
      if (err) return res.status(500).send("There was a problem updating your Monster");
      res.status(200).send(quest);
  })
}); 


module.exports = router;
