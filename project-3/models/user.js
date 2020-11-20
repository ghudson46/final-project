const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true},
<<<<<<< HEAD
    nickname: { type: String, required: true},
    email: { type: String, required: true },
    profileImg: { type: String, required: true},
    rooms: { type: Array}
=======
    nickname: { type: String, required: true },
    email: { type: String, required: true },
    profileImg: { type: String, require: true},
    rooms: { type: array }
>>>>>>> main
});

const User = mongoose.model("User", userSchema);

module.exports = User;