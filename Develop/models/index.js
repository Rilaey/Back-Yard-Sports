const User = require('./User');
const Team = require('./Team');

User.hasMany(Team, {
    foreignKey: 'captain',
    onDelete: 'CASCADE'
});

Team.belongsTo(User, {
    foreignKey: 'captain'
});

module.exports = { User, Team };