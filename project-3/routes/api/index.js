const router = require('express').Router();
const roomRoutes = require('/rooms');
const messageRoutes = require('/messages');

router.use('/rooms', roomRoutes);
router.use('/messages', messageRoutes);

module.exports = router;