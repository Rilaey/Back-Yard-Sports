const { Team } = require('../models');

const teamData = [
    {
        name: 'Best Basketball Team',
        captain: 1,
        players: 1,
        sport: 'Basketball',
        state: 'FL',
        city: 'Orlando',
    },
    {
        name: 'Best Baseball Team',
        captain: 2,
        players: 2,
        sport: 'Baseball',
        state: 'FL',
        city: 'Miami',
    },
    {
        name: 'Best Swimming Team',
        captain: 3,
        players: 3,
        sport: 'Swimming',
        state: 'FL',
        city: 'Tampa',
    },
    {
        name: 'Best Golf Team',
        captain: 4,
        players: 4,
        sport: 'Golf',
        state: 'FL',
        city: 'Tampa',
    },
];

const seedTeamData = () => Team.bulkCreate(teamData);

module.exports = seedTeamData;