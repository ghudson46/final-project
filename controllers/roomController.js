const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Room
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    db.Room 
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Room
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUserRooms: function(req, res) {
    db.Room
      .find({ userId: user.sub })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("req.body", req.body);
    db.Room
      .create(req.body)
      .then(dbModel =>  res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Room
      .findById({_id: req.params.id})
      .then(room => room.remove())
      .then(allrooms => res.json(allrooms))
      .catch(err => res.status(422).json(err));
  }
};
