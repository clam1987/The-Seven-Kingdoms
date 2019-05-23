"use strict";
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let QuestSchema = new Schema({
        name: String,
        description: String,
        completed: false,
});

let Quests = mongoose.model("Quests", QuestSchema);

module.exports = Quests;