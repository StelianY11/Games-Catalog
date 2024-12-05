const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { gameController: gameController} = require('../controllers');

// middleware that is specific to this router

router.get('/', gameController.getGames);
router.post('/', auth(), gameController.createGame);

router.get('/:gameId', gameController.getGame);
router.put('/:gameId', auth(), gameController.subscribe);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router