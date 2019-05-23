"use strict";
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let CharacterSchema = new Schema({
    Character: {
        name: String,
        hp: Number,
        str: Number,
        def: Number,
        spd: Number,
        lck: Number,
        gold: Number
    }
});

let Character = mongoose.model("Characters", CharacterSchema);

module.exports = Character;
