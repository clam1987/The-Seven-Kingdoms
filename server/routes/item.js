const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");


// Routes
router.use(bodyParser.urlencoded({ extended: true }))


const Items = require("../models/Item");

// Get Item Route
router.get("/item/:id", (req, res) => {
  // console.log(req.body);
  // console.log(req.params);
  Items.findById(req.params.id, function (err, item) {
    console.log(item);
      if (err) return res.status(500).send("There was a problem finding the item.");
      if (!item) return res.status(404).send("No item found.");
      res.status(200).send(item);
      // console.log(res);
})
}),

// Post Item route
router.post("/item", (req, res) => {
  const newItems = new Items (req.body);
  newItems.save()
  .then(item => {
    console.log("yes");
    req.flash("sucess_msg", "Item Created");
    res.send("Sucess");
  })
  .catch(err => console.log(err)); 
});

// Put item Route
router.put("/item/update/:id", (req, res) => {
  Items.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, item) => {
    console.log(req.body);
      if (err) return res.status(500).send("There was a problem updating your Item");
      res.status(200).send(item);
  })
}); 

// Delete item route
router.delete("/delete/item/:id", (req, res) => {
  Items.findByIdAndDelete(req.params.id, (err, item) => {
    console.log(req.body);
      if (err) return res.status(500).send("There was a problem deleting your Item");
      res.status(200).send(item);
  })
}); 

module.exports = router;
