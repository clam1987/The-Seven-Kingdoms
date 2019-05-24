"use strict";
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let CharacterSchema = new Schema({
        name: String,
        hp: Number,
        str: Number,
        def: Number,
        spd: Number,
        lck: Number,
        gold: Number,
        user: {type: Schema.Types.ObjectId, ref: "User"}
    
});

let Character = mongoose.model("Characters", CharacterSchema);

module.exports = Character;
