const router = require('express').Router();
const userAuth = require('../../utils/auth');
const { User, Team } = require('../../models')

router.get('/', userAuth, async (req, res) => {
  try {
    console.log(`req session.id -${req.session.user_id}`);
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: 'password' },
      include: [{ 
        model: Team,
        include: [{ model: User }]
      }],
    });

    const currentUser = userData.get({ plain: true });
    console.log(currentUser);

    res.render('chat', {
      ...currentUser,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err); 
    console.log(err);
  }
});

module.exports = router;