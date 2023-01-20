const router = require('express').Router();
const { Sport } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newSport = await Sport.create({
      ...req.body,
      players: req.session.players,
    });

    res.status(200).json(newSport);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const sportData = await Sport.destroy({
      where: {
        id: req.params.id,
        players: req.session.players,
      },
    });

    if (!sportData) {
      res.status(404).json({ message: 'No sport found with this id' });
      return;
    }

    res.status(200).json(sportData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;