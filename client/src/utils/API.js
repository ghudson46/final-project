import axios from "axios";

export default {
  // Gets all rooms
  getRooms: function() {
    return axios.get("/api/rooms");
  },
  // Gets the room with the given id
  getRoom: function(id) {
    return axios.get("/api/rooms/" + id);
  },
  deleteRoom : function(id) {
    return axios.delete('/api/rooms' + id);
  },
  getUserRooms: function() {
    return axios.get('/api/rooms');
  },
  // Gets all messages
  getMessages: function() {
    return axios.get("/api/messages");
  },
  // gets the message with the given id
  getMessage: function(id) {
    return axios.get("/api/messages/" + id);
  },
  createRoom: function(roomData) {
      return axios.post('/api/rooms', roomData)
  },
  createMessage: function(messageData) {
      return axios.post('/api/messages', messageData)
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id)
  },
  getUsers: function() {
    return axios.get("/api/users");
  },
  createUser: function(userData) {
    return axios.post('/api/users', userData)
  }
};
