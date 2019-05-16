"use strict";
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let QuestSchema = new Schema({
    quest: {
        name: String,
        description: String,
        boolean: false,
    }
});

let Quests = mongoose.model("Quests", QuestSchema);

module.exports = Quests;