const router = require('express').Router();
const roomsController = require('../../controllers/roomController');

// Matches with '/api/rooms
router.route('/join')
    .get(roomsController.findAll);

router.route('/create')
    .post(roomsController.create);

router
    .route('/join/:id')
    .get(roomsController.findById)

module.exports = router;