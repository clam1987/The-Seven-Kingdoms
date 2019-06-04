"use strict";
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: String,
  info: String,
  type: String,
  price: Number,
  hp: Number,
  str: Number,
  def: Number,
  spd: Number,
  qty: Number
});

let Item = mongoose.model("Items", ItemSchema);

module.exports = Item;
