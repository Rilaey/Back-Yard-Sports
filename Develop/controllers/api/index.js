const router = require('express').Router();
const userRoutes = require('./userRoutes');
const teamRoutes = require('./teamRoutes');
const sportRoutes = require('./sportRoutes');
const searchRoutes = require('./searchRoutes');

router.use('/user', userRoutes);
router.use('/team', teamRoutes);
router.use('/sport', sportRoutes);
router.use('/search', searchRoutes);

module.exports = router;
