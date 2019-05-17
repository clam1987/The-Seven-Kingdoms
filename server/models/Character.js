"use strict";
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let CharacterSchema = new Schema({
    Character: {
        name: String,
        hp: Int,
        str: Int,
        def: Int,
        spd: Int,
        gold: Int
    }
});

let Character = mongoose.model("Characters", CharacterSchema);

module.exports = Character;
