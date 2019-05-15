"use strict";
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ItemSchema = new Schema({
    item: {
        type: String,
        str: Int,
        def: Int,
        spd: Int,
        cost: Int,
        qty: Int
    }
});

let Item = mongoose.model("Itemdb", ItemSchema);

module.exports = Item;