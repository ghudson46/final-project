const router = require('express').Router();
const roomRoutes = require('./room');
const messageRoutes = require('./message');
const userRoutes = require('./user')

router.use('/rooms', roomRoutes);
router.use('/messages', messageRoutes);
router.use('/users', userRoutes);

module.exports = router;