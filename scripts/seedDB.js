const mongoose = require("mongoose");
const db = require("../models");

// mongodb connection

mongoose.connect('mongodb+srv://ghudson:MongoDB123!@cluster0.akxae.mongodb.net/project3?retryWrites=true&w=majority',  { useNewUrlParser: true });

const roomSeed = [
    {
        userId: 'google-oauth2|106316170555327315614',
        name: 'Project 3'
    },
    {
        userId: 'google-oauth2|106316170555327315614',
        name: 'Study Group'
    },
    {
      userId: 'google-oauth2|106316170555327315614',
        name: 'College Friends'
    }
]

const userSeed = [
  {
    name: 'Garrett Hudson',
    nickname: 'ghudson46',
    email: 'garrett.hudson46@gmail.com',
    profilePic: 'https://richmondspiders.com/images/2016/8/16/RFRRRBJPHTHTYPA.20160816021134.jpg',
    rooms: ['Hudson House', 'Star Wars', 'Test 5']
  },
  {
    name: 'Scooby Doo',
    nickname: 'Scooby',
    email: 'scoobysnacklover@gmail.com',
    profilePic: 'https://www.thesun.co.uk/wp-content/uploads/2019/11/NINTCHDBPICT000536074229-e1572807808559.jpg',
    rooms: ['Mystery Inc', 'Scooby Snack']
  },
]

const messageSeed = [
  {
    message: 'This is a test',
    sender: 'Test Man',
    room: 'test'
  },
  {
    message: 'This is a test also',
    sender: 'Test Guy',
    room: 'test'
  },
  {
    message: 'I think this is a test too',
    sender: 'Test Lady',
    room: 'test2'
  }
]

db.Room
  .remove({})
  .then(() => db.Room.collection.insertMany(roomSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
