const router = require('express').Router();
const userRoutes = require('./userRoutes');
const teamRoutes = require('./teamRoutes');
const sportRoutes = require('./sportRoutes');

router.use('/user', userRoutes);
router.use('/team', teamRoutes);
router.use('/sport', sportRoutes);

module.exports = router;
