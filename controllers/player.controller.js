const Player = require('../models/player.model.js');

// Create and Save a new player
exports.create = (req, res) => {
    if (!req.body.name) {
        return res.status(400).send({
            message: "Player name can not be empty"
        });
    }

    const player = new Player({
        name: req.body.name || 'untitled',
        dob: req.body.dob,
        nationality: req.body.nationality,
        gender: req.body.gender,
        location: req.body.location,
        team: req.body.team,
        sports: req.body.sports,
        about: req.body.about,
        linkedin: req.body.linkedin,
        facebook: req.body.facebook,
        youtube: req.body.youtube
    });


    player.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Player."
            });
        });
};



// Retrieve and return all players from the database.
exports.findAll = (req, res) => {

    Player.find()
        .then(players => {
            res.send(players);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving players."
            });
        });

};

// Find a single player with a playerId
exports.findOne = (req, res) => {
    Player.findById(req.params.playerId)
        .then(player => {
            if (!player) {
                return res.status(404).send({
                    message: "Player not found with id " + req.params.playerId
                });
            }
            res.send(player);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Player not found with id " + req.params.playerId
                });
            }
            return res.status(500).send({
                message: "Error retrieving player with id " + req.params.playerId
            });
        });
};

// Update a player identified by the playerId in the request
exports.update = (req, res) => {
    if (!req.body.name) {
        return res.status(400).send({
            message: "Player name can not be empty"
        });
    }

    // Find player and update it with the request body
    Player.findByIdAndUpdate(req.params.playerId, {
        name: req.body.name || "Untitled",
        name: req.body.name || "No name",
        dob: req.body.dob,
        gender: req.body.gender,
        nationality: req.body.nationality,
        location: req.body.location,
        team: req.body.team,
        sports: req.body.sports,
        about: req.body.about,
        linkedin: req.body.linkedin,
        facebook: req.body.facebook,
        youtube: req.body.youtube
    }, { new: true })
        .then(player => {
            if (!player) {
                return res.status(404).send({
                    message: "player not found with id " + req.params.playerId
                });
            }
            res.send(player);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "player not found with id " + req.params.playerId
                });
            }
            return res.status(500).send({
                message: "Error updating player with id " + req.params.playerId
            });
        });
};

