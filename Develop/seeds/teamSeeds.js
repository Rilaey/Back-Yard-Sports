const { Team } = require('../models');

const teamData = [
    {
        name: 'Best Basketball Team',
        captain: 'player1',
        sport: 'Basketball',
        state: 'FL',
        city: 'Orlando',
    },
    {
        name: 'Best Baseball Team',
        captain: 'player2',
        sport: 'Baseball',
        state: 'FL',
        city: 'Miami',
    },
    {
        name: 'Best Swimming Team',
        captain: 'player3',
        sport: 'Swimming',
        state: 'FL',
        city: 'Tampa',
    },
    {
        name: 'Best Golf Team',
        captain: 'player4',
        sport: 'Golf',
        state: 'FL',
        city: 'Tampa',
    },
];

const seedTeamData = () => Team.bulkCreate(teamData);

module.exports = seedTeamData;