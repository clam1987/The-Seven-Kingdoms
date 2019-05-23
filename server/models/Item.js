"use strict";
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ItemSchema = new Schema({
        name: String,
        str: Number,
        def: Number,
        spd: Number,
        cost: Number,
        qty: Number
});

let Item = mongoose.model("Items", ItemSchema);

module.exports = Item;