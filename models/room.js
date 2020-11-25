const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true }
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;