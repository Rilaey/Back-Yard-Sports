const { User } = require('../models');

const userData = [
    {
        sports_played: 'Basketball',
        teams: 'Best Basketball Team',
        available: 1,
        state: 'FL',
        city: 'Orlando',
        username: 'player1',
        email: 'player1@gmail.com',
        password: 'password123!'
    },
    {
        sports_played: 'Baseball',
        teams: 'Best Baseball Team',
        available: 0,
        state: 'FL',
        city: 'Miami',
        username: 'player2',
        email: 'player2@gmail.com',
        password: 'password123!'
    },
    {
        sports_played: 'Swimming',
        teams: 'Best Swimming Team',
        available: 0,
        state: 'FL',
        city: 'Tampa',
        username: 'player3',
        email: 'player3@gmail.com',
        password: 'password123!'
    },
    {
        sports_played: 'Golf',
        teams: 'Best Golf Team',
        available: 1,
        state: 'FL',
        city: 'Tampa',
        username: 'player4',
        email: 'player4@gmail.com',
        password: 'password123!'
    },
]

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;