"use strict";
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const MonsterSchema = new Schema({
  monID: {
    type: Number,
    unique: true
  },
  name: String,
  hp: Number,
  str: Number,
  def: Number,
  spd: Number,
  luk: Number,
  exp: Number,
  gold: Number
});

let Monster = mongoose.model("Monsters", MonsterSchema);

module.exports = Monster;
