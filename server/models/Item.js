"use strict";
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ItemSchema = new Schema({
    item: {
        name: String,
        str: Int,
        def: Int,
        spd: Int,
        cost: Int,
        qty: Int
    }
});

let Item = mongoose.model("Items", ItemSchema);

module.exports = Item;