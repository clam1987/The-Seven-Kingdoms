const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");

//User Model
const User = require("../models/User");

// Login Handle
router.post("/login", (req, res, next) => {
  console.log('hit login');
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/users/login",
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
  let errors = [];

  // Check required fields
  if (!name || !email || !password || !password2) {
    errors.push({
      msg: "Please fill in all fields"
    });
  }

  // Check if passwords are a match
  if (password !== password2) {
    error.push({
      msg: "Passwords do not match"
    });
  }

  // Check password's length
  if (password.length < 8) {
    errors.push({
      msg: "Passwords should be at least 8 characters"
    })
  }

  if (errors.length > 0) {
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
    // Validation Pass
    User.findOne({
        email: email
      })
      .then(user => {
        if (user) {
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
