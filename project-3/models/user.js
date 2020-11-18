const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, require: true, minLength: 6},
    profilePic: { type: String }
});

const User = mongoose.model("User", userSchema);

module.exports = User;