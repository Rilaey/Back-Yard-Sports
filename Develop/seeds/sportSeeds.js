const { Sport } = require('../models');

const sportData = [
    {
        name: 'Basketball',
        players: 1,
    },
    {
        name: 'Baseball',
        players: 2,
    },
    {
        name: 'Swimming',
        players: 3,
    },
    {
        name: 'Golf',
        players: 4,
    },
];

const seedSportsData = () => Sport.bulkCreate(sportData);

module.exports = seedSportsData;