"use strict";
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let MonsterSchema = new Schema({
    Monster: {
        name: String,
        hp: Number,
        str: Number,
        def: Number,
        spd: Number,
        gold: Number
    }
});

let Monster = mongoose.model("Monsters", MonsterSchema);

module.exports = Monster;