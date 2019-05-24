const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const mongoose = require("mongoose");
// const Character = require("./Character");

let Schema = mongoose.Schema;

// let ItemSchema = new Schema({
//   name: String,
//   str: Number,
//   def: Number,
//   spd: Number,
//   cost: Number,
//   qty: Number
// });

// let QuestSchema = new Schema({
//     name: String,
//     description: String,
//     boolean: false
// });

// let CharacterSchema = new Schema({
//     name: String,
//     hp: Number,
//     str: Number,
//     def: Number,
//     spd: Number,
//     lck: Number,
//     gold: Number,
    // quest: [QuestSchema],
    // item: [ItemSchema]
// });

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
  character: [{type: Schema.Types.ObjectId, ref: "Characters"}]
});

const User = mongoose.model("User", UserSchema);
// const Character = mongoose.model("Characters", CharacterSchema);

module.exports = User;
