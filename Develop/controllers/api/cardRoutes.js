// const router = require('express').Router();
// const { Team, User } = require('../../models');

// router.get('/', async (req, res) => {
//   try {
//     const cardData = await Team.findAll({
//       include: [
//         {
//           model: User,
//         },
//       ],
//     });

//     let cardTeamsArray = []
//     for (let i = 0; i < cardData.length; i++) {
//         let cardTeamArray = cardData[i];
//         cardTeamsArray.push(cardTeamArray);
//     };

//     res.status(200).json(cardTeamsArray);
//   } catch (err) {
//     res.status(500).json(err);
//     console.log(err);
//   }
// });

// module.exports = router;