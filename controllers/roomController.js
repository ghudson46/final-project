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
  delete: function(req, res) {
    db.Room
      .deleteOne({_id: req.params.id})
      .then(() => {
        res.status(200).json({
          message: 'Deleted'
        });
      })
      .catch(err => res.status(422).json(err));
  }
};
