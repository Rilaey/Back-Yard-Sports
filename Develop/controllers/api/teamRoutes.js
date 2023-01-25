const router = require('express').Router();
const { Team } = require('../../models');
const userAuth = require('../../utils/auth');

// create new team
router.post('/newTeam', userAuth, async (req, res) => {
  try {
    const newTeam = Team.create({
      name: req.body.teamName,
      captain: req.session.user_id,
      players: req.session.user_id,
      sport: req.body.teamSport,
      team_zip_code: req.body.teamZipCode,
      state: req.body.teamState,
      city: req.body.teamCity,
    });

    res.status(200).json(newTeam);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;