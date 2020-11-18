// const mongoose = require('mongoose');
// const Room = require('../models/room');

// mongoose.connect(
//    process.env.MONGODB_URI ||
//    "mongodb://localhost/project3",
//    { useNewUrlParser: true }
// );

// mongoose.connect('mongodb+srv://ghudson:MongoDB123!@cluster0.akxae.mongodb.net/project3?retryWrites=true&w=majority',  { useNewUrlParser: true });

// // mongodb+srv://<username>:<password>@cluster0.akxae.mongodb.net/<dbname>?retryWrites=true&w=majority

// const roomSeed = [
//     {
//         name: 'test1',
//         dateCreated: new Date(Date.now())
//     },
//     {
//         name: 'test2',
//         dateCreated: new Date(Date.now())
//     },
//     {
//         name: 'test3',
//         dateCreated: new Date(Date.now())
//     },
//     {
//         name: 'test4',
//         dateCreated: new Date(Date.now())
//     },
// ]

// db.Room
//     .deleteMany({})
//     .then(() => db.Room.collection.insertMany(roomSeed))
//     .then(data => {
//         console.log(data.result.n + ' records inserted!');
//         process.exit(0);
//     }).catch(err => {
//         console.error(err);
//         process.exit(1);
//     })

const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect('mongodb+srv://ghudson:MongoDB123!@cluster0.akxae.mongodb.net/project3?retryWrites=true&w=majority',  { useNewUrlParser: true });

const roomSeed = [
    {
        name: 'Hudson House',
        creator: 'Garret Hudson',
        usersInRoom: ['Abbey Hudson', 'Garrett Hudson', 'Moose Hudson'],
        dateCreated: new Date(Date.now())
    },
    {
        name: 'Star Wars',
        creator: 'George Lucas',
        usersInRoom: ['Darth Vader', 'Luke Skywalker', 'Han Solo', 'Boba Fett'],
        dateCreated: new Date(Date.now())
    },
    {
        name: 'LA Lakers',
        creator: 'LeBron James',
        usersInRoom: ['LeBron James', 'Anthony Davis', 'Rajon Rondo', 'Kyle Kuzma'],
        dateCreated: new Date(Date.now())
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
