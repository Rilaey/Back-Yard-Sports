const router = require('express').Router();
const { Team } = require('../../models');
const TeamMember = require('../../models/TeamMember');
const userAuth = require('../../utils/auth');

// create new team
router.post('/newTeam', userAuth, async (req, res) => {
  try {
    const newTeam = await Team.create({
      name: req.body.teamName,
      captain: req.session.user_id,
      sport: req.body.teamSport,
      team_zip_code: req.body.teamZipCode,
      state: req.body.teamState,
      city: req.body.teamCity,
    });

    await TeamMember.create({
      player_id: req.session.user_id,
      team_id: newTeam.id,
    });

    res.status(200).json(newTeam);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.put('/join', userAuth, async (req, res) => {
  try {
    const teamId = req.body.teamId;
    const userId = req.session.user_id;
    const team = await Team.findByPk(teamId);
    const teamMember = await TeamMember.create({
      player_id: userId,
      team_id: team.id,
    });
    res.status(200).json(teamMember);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
})

module.exports = router;