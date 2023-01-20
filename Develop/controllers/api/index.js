const router = require('express').Router();
const userRoutes = require('./userRoutes');
const teamRoutes = require('./teamRoutes');
const sportRoutes = require('./sportRoutes');

router.use('/users', userRoutes);
router.use('/teams', teamRoutes);
router.use('/sports', sportRoutes);

module.exports = router;