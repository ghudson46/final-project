const router = require('express').Router();
const messageController = require('../../controllers/messageController');

// matches with '/api/messages
router.route('/chat')
    .get(messageController.findAll)
    .post(messageController.create);


    module.exports = router;