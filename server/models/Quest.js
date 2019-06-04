"use strict";
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const QuestSchema = new Schema({
  name: String,
  description: String,
  rewards: [{
    item: String,
    gold: Number,
    exp: Number
  }]
});

let Quests = mongoose.model("Quests", QuestSchema);

module.exports = Quests;
