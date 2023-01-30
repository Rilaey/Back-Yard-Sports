const { TeamMember } = require('../models');

const teamMemberData = [
    {
        player_id: 1,
        team_id: 1,
    },
    {
        player_id: 1,
        team_id: 2,
    },
    {
        player_id: 1,
        team_id: 3,
    },
    {
        player_id: 2,
        team_id: 2,
    },
    {
        player_id: 2,
        team_id: 3,
    },
    {
        player_id: 3,
        team_id: 2,
    },
    {
        player_id: 3,
        team_id: 3,
    },
    {
        player_id: 3,
        team_id: 4,
    },
    {
        player_id: 4,
        team_id: 4,
    },
    {
        player_id: 4,
        team_id: 1,
    },
];

const teamMembersData = () => TeamMember.bulkCreate(teamMemberData);

module.exports = teamMembersData;