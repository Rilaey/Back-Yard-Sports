const router = require('express').Router();
const { User } = require('../../models');

// create new account
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      currently_available: req.body.currently_available,
      state: req.body.state,
      city: req.body.city,
      username: req.body.username,
      email: req.body.email,
      password: req.body.email,
    });

    req.session.save(() => {
      req.session.logged_in = true;
      res.status(200).json(newUser);
    });
  } catch (err) {
    req.status(500).json(err);
    console.log(err);
  }
});

// login user
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!userData) {
        res.status(400);
        return;
      }
  
      const correctPassword = await userData.checkPassword(req.body.password);
  
      if (!correctPassword) {
        res.status(400)
        return;
      }
  
      req.session.save(() => {
        req.session.logged_in = true;
        req.session.user_id = userData.id;
  
        res.status(200);
      });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// logout user
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(500).end();
  }
});

module.exports = router;
