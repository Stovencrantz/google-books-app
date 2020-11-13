const db = require("../models");

//Define methods for the books controller

module.exports = {
    findAll: function (req, res) {
        db.Book.find().then((dbModel) => res.json(dbModel))
    },
    create: function (req, res) {
        db.Book.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
}