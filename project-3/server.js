// Dependencies for socket.io
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

// Dependencies for mongodb
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// User methods
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const { urlencoded } = require('express');

// Express app connects to server and socket
const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(routes);




// on connection to socket.io
io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });


    callback();
  });

  // runs when a message is sent
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  // Runs when user disconnects from room
  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

// MONGODB
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
}


// mongodb connection
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/project3"
// );

mongoose.connect('mongodb+srv://ghudson:MongoDB123!@cluster0.akxae.mongodb.net/project3?retryWrites=true&w=majority',  { useNewUrlParser: true });

server.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });