const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const bodyParser = require("body-parser");

//Routers
router.use(bodyParser.urlencoded({ extended: true }))

//User Model
const User = require("../models/User");

// Login Handle
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/character",
    failureRedirect: "/login",
    failureFlash: true
  })(req, res, next);
});

// Post Routes
// SignUp Hanlder
router.post("/signup", (req, res) => {

  const {
    name,
    email,
    password,
    password2
  } = req.body;
  console.log(req.body)
  let errors = [];

  // if (Object.keys(req.body).length < 4) {
  //   console.log(req.body);
  //   errors.push({
  //     msg: "Please fill in all fields with characters greater then 4"
  //   });
  // }
  // Check required fields
  if (!name || !email || !password || !password2) {
    console.log("You just failed")
    errors.push({
      msg: "Please fill in all fields"
    });
  }

  // Check if passwords are a match
  if (password !== password2) {
    console.log("Validiation failed")
    errors.push({
      msg: "Passwords do not match"
    });
  }

  // Check password's length
  if (password && password.length < 8) {
    console.log("Validiation failed1")
    errors.push({
      msg: "Passwords should be at least 8 characters"
    })
  }

  if (errors.length > 0) {
    console.log("Validiation failed2")
    // change to res.render when components are up on react
    // Decide on partials equivalent for react to alert user what the error is
    res.json({
      errors,
      name,
      email,
      password,
      password2
    })
  } else {
    console.log("Validiation failed3")
    // Validation Pass
    User.findOne({
        email: email
      })
      .then(user => {
        if (user) {
          console.log("Validiation failed4")
          // change to res.render when components are up on react
          // Decide on partials equivalent for react to alert user what the error is
          // if user exists
          errors.push({
            msg: "Email is already registered"
          });
          res.json({
            errors,
            name,
            email,
            password,
            password2

          });
        } else {
          console.log("Validiation failed5")
          const newUser = new User({
            name,
            email,
            password
          });

          // Hash Password
          bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            // Set password to hash ex. ****
            newUser.password = hash;
            // Save user
            newUser.save()
              .then(user => {
                req.flash("sucess_msg", "You are now registered");
                res.redirect("/users/login");
              })
              .catch(err => console.log(err));

          }))
        }
      });
  }
});

router.use(require('../config/auth'));

// Logout Handle
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("sucess_msg", "You logged out sucessfully");
  res.redirect("/users/login");
})

module.exports = router;
