const router = require('express').Router();
const messageController = require('../../controllers/messageController');

// matches with '/api/messages
router.route('/')
    .get(messageController.findAll)
    .post(messageController.create);

router.route('/:id')
    .get(messageController.findById)


    module.exports = router;