const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    message: { type: String},
    sender: { type: String },
    room: { type: String }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
