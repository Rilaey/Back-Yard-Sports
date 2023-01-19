const router = require('express').Router();
const { Sport, Team, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    // Pass serialized data and session flag into template
    res.render('home', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;