"use strict";
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let MonsterSchema = new Schema({
    Monster: {
        name: String,
        hp: Int,
        str: Int,
        def: Int,
        spd: Int,
        gold: Int,
    }
});

let Monster = mongoose.model("Monsters", MonsterSchema);

module.exports = Monster;