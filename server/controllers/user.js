const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Load in User Model
const User = require("../models/User");

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
            // Match User
            User.findOne({ email: email })
            .then(user => {
                if(!user) {
                    console.log("can't find user")
                    return done(null, false, { message: "That email is not registered" });
                }

                // Match Password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if(err) throw err;

                    if(isMatch) {
                        passport.serializeUser((user, done) => {
                            done(null, user.id);
                            // console.log(user.id)
                          });
                          passport.deserializeUser((id, done) => {
                            User.findById(id, (err, user) => {
                              done(err, user);
                            });
                          });
                        return done(null, user);
                        
                    } else {
                        console.log("can't find password")
                        return done(null, false, { message: "Password Incorrect" });
                    }
                });
            
            })
            .catch(err => console.log(err))
        })
    );
    
    // passport.serializeUser((user, done) => {
    //     done(null, user.id);
    //   });
      
    //   passport.deserializeUser((id, done) => {
    //     User.findById(id, (err, user) => {
    //       done(err, user);
    //     });
    //   });


};