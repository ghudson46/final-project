const router = require('express').Router();
const roomsController = require('../../controllers/roomController');

// Matches with '/api/rooms
router.route('/')
    .get(roomsController.findAll)
    .get(roomsController.findOne)
    .post(roomsController.create);


router
    .route('/:id')
    .get(roomsController.findById)
    .delete(roomsController.delete)

module.exports = router;