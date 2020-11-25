// Dependencies for socket.io
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const Message = require('./models/message');

// Express app connects to server and socket
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Dependencies for mongodb
const mongoose = require('mongoose');

// User methods
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const server = http.createServer(app);
const io = socketio(server);

const routes = require('./routes');
app.use(routes);


// on connection to socket.io
io.on('connect', (socket) => {
  // runs when a user joins
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    Message.find({room: user.room}, (err, messages) => {
      messages.forEach(message => {
        socket.emit('message', { user: message.sender, text: message.message});
      });
    });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });


    callback();
  });

  // runs when a message is sent
  socket.on('sendMessage', (message, callback) => {
   

    const user = getUser(socket.id);

    const newMessage = new Message({
      message: message,
      sender: user.name,
      room: user.room
    });
    newMessage.save();

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
