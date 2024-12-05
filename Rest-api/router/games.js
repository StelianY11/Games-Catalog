const express = require('express');
const router = express.Router();
const { auth } = require('../utils'); 
const { gameController } = require('../controllers');  

router.get('/', gameController.getGames);

router.post('/', auth(), gameController.createGame);

router.get('/:gameId', gameController.getGame);

router.put('/:gameId', auth(), gameController.updateGame);
router.delete('/:gameId', auth(), gameController.deleteGame);
router.put('/:gameId/buy', auth(), gameController.buyGame);

module.exports = router;
