const router = require('express').Router();
const { Team, User } = require('../../models');
const userAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
      const teamData = await Team.findAll({
        where: {
            sport: req.body.name
        },
        include: [
            {
                model: User
            }
        ]
      });
      console.log(teamData)
      res.status(200).json(teamData);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  });

  
  module.exports = router;