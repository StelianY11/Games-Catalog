const Game = require('../models/gameModel');

// Get all games
function getGames(req, res, next) {
    Game.find()
        .populate('owner')
        .then(games => res.json(games))
        .catch(next);
}

// Get a single game by ID
function getGame(req, res, next) {
    const { gameId } = req.params;

    Game.findById(gameId)
        .populate('owner')
        .populate('boughtBy') // Include users who bought the game
        .then(game => {
            if (!game) {
                return res.status(404).json({ message: "Game not found" });
            }
            res.json(game);
        })
        .catch(next);
}

// Create a new game
function createGame(req, res, next) {
    const { name, image, price, description, genre } = req.body;
    const { _id: userId } = req.user; // Assuming `req.user` contains authenticated user's details

    Game.create({ name, image, price, description, genre, owner: userId })
        .then(game => res.status(201).json(game))
        .catch(next);
}

// Update a game
function updateGame(req, res, next) {
    const { gameId } = req.params;
    const updateData = req.body;

    Game.findByIdAndUpdate(gameId, updateData, { new: true })
        .then(updatedGame => {
            if (!updatedGame) {
                return res.status(404).json({ message: "Game not found" });
            }
            res.json(updatedGame);
        })
        .catch(next);
}

// Delete a game
function deleteGame(req, res, next) {
    const { gameId } = req.params;

    Game.findByIdAndDelete(gameId)
        .then(deletedGame => {
            if (!deletedGame) {
                return res.status(404).json({ message: "Game not found" });
            }
            res.json({ message: "Game deleted successfully" });
        })
        .catch(next);
}

// Buy a game (add user to `boughtBy` list)
function buyGame(req, res, next) {
    const { gameId } = req.params;
    const { _id: userId } = req.user;

    Game.findByIdAndUpdate(
        gameId,
        { $addToSet: { boughtBy: userId } }, // Ensure user is added only once
        { new: true }
    )
        .populate('boughtBy')
        .then(updatedGame => {
            if (!updatedGame) {
                return res.status(404).json({ message: "Game not found" });
            }
            res.json(updatedGame);
        })
        .catch(next);
}

module.exports = {
    getGames,
    getGame,
    createGame,
    updateGame,
    deleteGame,
    buyGame,
};
