const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        index: { unique: true } 
    },
    email: {
        type: String,
        required: true,
        index: { unique: true } 
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;