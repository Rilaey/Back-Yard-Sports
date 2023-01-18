const { Sport } = require('../models');

const sportData = [
    {
        name: 'Basketball',
        players: 'player1',
    },
    {
        name: 'Baseball',
        players: 'player2'
    },
    {
        name: 'Swimming',
        players: 'player3'
    },
    {
        name: 'Golf',
        players: 'player4',
    },
];

const seedSportsData = () => Sport.bulkCreate(sportData);

module.exports = seedSportsData;