const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect('mongodb+srv://ghudson:MongoDB123!@cluster0.akxae.mongodb.net/project3?retryWrites=true&w=majority',  { useNewUrlParser: true });

const roomSeed = [
    {
        name: 'Hudson House'
    },
    {
        name: 'Star Wars'
    },
    {
        name: 'LA Lakers'
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

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
