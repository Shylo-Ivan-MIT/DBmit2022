const db = require("../models");
const Champ = db.champs;

// Create and Save a new entry
exports.create = (req, res) => {
    // Validate request
    if (!req.body.full_name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create an entry
    const champ = new Champ({
        full_name: req.body.full_name,
        age: req.body.age,
        gender: req.body.gender,
        team: req.body.team
    });

    // Save entry in the database
    champ
        .save(champ)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the entry."
            });
        });
};

// Retrieve all entrys from the database.
exports.findAll = (req, res) => {
    const full_name = req.query.full_name;
    var condition = full_name ? { full_name: { $regex: new RegExp(full_name), $options: "i" } } : {};

    Champ.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving entrys."
            });
        });
};

// Find a single entry with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Champ.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found entry with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving entry with id=" + id });
        });
};

// Update a entry by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Champ.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update entry with id=${id}. Maybe entry was not found!`
                });
            } else res.send({ message: "Entry was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating entry with id=" + id
            });
        });
};

// Delete a entry with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Champ.findByIdAndRemove(id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete entry with id=${id}. Maybe entry was not found!`
                });
            } else {
                res.send({
                    message: "Entry was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete entry with id=" + id
            });
        });
};

// Delete all entrys from the database.
exports.deleteAll = (req, res) => {
    Champ.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} entrys were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all entrys."
            });
        });
};

