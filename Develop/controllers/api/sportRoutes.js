const router = require('express').Router();
const { Sport } = require('../../models');
const userAuth = require('../../utils/auth');

// create sport
router.post('/', userAuth, async (req, res) => {
  try {
    const newSport = Sport.create({
      name: req.body.name,
    });

    res.status(200).json(newSport);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;