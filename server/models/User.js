const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  
  lvl: {
    type: Number,
    default: 1
  },
  
  
    hp: {
      type: Number,
      default: 0
    },
    
    str: {
      type: Number,
      default: 0
    },

    def: {
      type: Number,
      default: 0
    },

    spd: {
      type: Number,
      default: 0
    },

    luk: {
      type: Number,
      default: 0
    },

    gold: {
      type: Number,
      default: 0
    },

    exp: {
      type: Number,
      default: 0
    },

    expToNext: {
      type: Number,
      default: 1000
    },

    inv: [],

    q1: {
      type: Boolean,
      default: false,
    },

    q2: {
      type: Boolean,
      default: false,
    },

    q3: {
      type: Boolean,
      default: false,
    },

    q4: {
      type: Boolean,
      default: false,
    },

    q5: {
      type: Boolean,
      default: false,
    },

    q6: {
      type: Boolean,
      default: false,
    },

    q7: {
      type: Boolean,
      default: false,
    },

    q8: {
      type: Boolean,
      default: false,
    }

});

const User = mongoose.model("User", UserSchema);
// const Character = mongoose.model("Characters", CharacterSchema);

module.exports = User;