const router = require('express').Router();
const { Team, User } = require('../../models');
const userAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    let where = {};
    if (req.body.sport) {
      where.sport = req.body.sport;
    }
    if (req.body.zip) {
      where.zip = req.body.zip;
    }
    if (req.body.state) {
      where.state = req.body.state;
    }
    if (req.body.city) {
      where.city = req.body.city;
    }
    const teamData = await Team.findAll({
      where,
      include: [
        {
          model: User,
        },
      ],
    });
    res.status(200).json(teamData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
