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
    firstName: 'Garrett',
    lastName: 'Hudson',
    userName: 'ghudson46',
    email: 'garrett.hudson46@gmail.com',
    password: 'thisismypassword',
    profilePic: 'https://richmondspiders.com/images/2016/8/16/RFRRRBJPHTHTYPA.20160816021134.jpg'
  },
  {
    firstName: 'Tom',
    lastName: 'Brady',
    userName: 'TB12',
    email: 'TB12@gmail.com',
    password: 'gobucsandpats',
    profilePic: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1b63Od.img?h=351&w=624&m=6&q=60&o=f&l=f'
  },
  {
    firstName: 'Scooby',
    lastName: 'Doo',
    userName: 'scoob',
    email: 'scoobysnacklover@gmail.com',
    password: 'ruhrohf',
    profilePic: 'https://www.thesun.co.uk/wp-content/uploads/2019/11/NINTCHDBPICT000536074229-e1572807808559.jpg'
  },
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
