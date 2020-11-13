const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now }
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;