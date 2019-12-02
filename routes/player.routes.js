module.exports = (app) => {
    const players = require('../controllers/player.controller.js');

    // Create a new Player
    app.post('/players', players.create);

    // Retrieve all player
    app.get('/players', players.findAll);

    // Retrieve a single Player with playerId
    app.get('/players/:playerId', players.findOne);

    // Update a Player with playerId
    app.put('/players/:playerId', players.update);
}