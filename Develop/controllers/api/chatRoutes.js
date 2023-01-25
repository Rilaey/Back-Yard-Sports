const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    res.render('chat');
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;