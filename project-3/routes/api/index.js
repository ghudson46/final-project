const router = require('express').Router();
const roomRoutes = require('./room');
const messageRoutes = require('./message');
const booksRoutes = require('./books');

router.use('/rooms', roomRoutes);
router.use('/messages', messageRoutes);
router.use('/books', booksRoutes);

module.exports = router;