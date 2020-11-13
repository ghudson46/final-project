const mongoose = require('mongoose');
const db = require('../models');

//mongoose.connect(
//    process.env.MONGODB_URI ||
//    "mongodb://localhost/project3"
//);

mongoose.connect('mongodb+srv://ghudson46:mongo123@cluster0.akxae.mongodb.net/project3?retryWrites=true&w=majority',  { useNewUrlParser: true });

// mongodb+srv://<username>:<password>@cluster0.akxae.mongodb.net/<dbname>?retryWrites=true&w=majority

const roomSeed = [
    {
        name: 'test1',
        dateCreated: new Date(Date.now())
    },
    {
        name: 'test2',
        dateCreated: new Date(Date.now())
    },
    {
        name: 'test3',
        dateCreated: new Date(Date.now())
    },
    {
        name: 'test4',
        dateCreated: new Date(Date.now())
    },
]

db.Room
    .deleteMany({})
    .then(() => db.Room.collection.insertMany(roomSeed))
    .then(data => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    }).catch(err => {
        console.error(err);
        process.exit(1);
    })