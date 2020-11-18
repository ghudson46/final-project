const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    rooms: { type: Array },
    img: { type: String}
});

const User = mongoose.model("User", userSchema);

module.exports = User;