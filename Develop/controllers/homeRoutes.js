const router = require('express').Router();
const { Sport, Team, User } = require('../models');
const userAuth = require('../utils/auth');

// homepage
router.get('/', async (req, res) => {
  try {
    const homePageData = await Team.findAll({
      includes: [{ module: User }],
    });

    const loadHomePageData = homePageData.map((x) => x.get({ plain: true }));

    res.render('home', {
      loadHomePageData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// login
router.get('/login', (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/profile');
    }

    res.render('login');
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// profile
router.get('/profile', userAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(res.session.user_id, {
      attributes: { exclude: password },
      includes: [{ module: Team }],
    });

    const currentUser = userData.get({ plain: true });

    res.render('profile', {
      ...currentUser,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
