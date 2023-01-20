const router = require('express').Router();
const { Team } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newTeam = await Team.create({
      ...req.body,
      captain: req.session.captain,
    });

    res.status(200).json(newTeam);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const teamData = await Team.destroy({
      where: {
        id: req.params.id,
        captain: req.session.captain,
      },
    });

    if (!teamData) {
      res.status(404).json({ message: 'No team found with this id' });
      return;
    }

    res.status(200).json(teamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;