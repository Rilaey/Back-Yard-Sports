const User = require("./User");
const Team = require("./Team");
const TeamMember = require("./TeamMember");
const Sport = require("./Sport");

////////////////////////////////
User.hasMany(Team, {
  foreignKey: "captain",
  onDelete: "CASCADE",
});

Team.belongsTo(User, {
  foreignKey: "captain",
});

////////////////////////////////
// this association does nothing, but seeds don't work if i remove it.
Sport.hasMany(User, {
  foreignKey: "sports_played",
  onDelete: "CASCADE",
});

User.belongsTo(Sport, {
  foreignKey: "sports_played",
});

////////////////////////////////
User.belongsToMany(Team, {
  through: TeamMember,
  foreignKey: 'player_id'
});

User.hasMany(TeamMember, {
  foreignKey: "player_id",
  onDelete: "CASCADE",
});

Team.hasMany(TeamMember, {
  foreignKey: "team_id",
  onDelete: "CASCADE",
});

TeamMember.belongsTo(User, {
  foreignKey: 'player_id'
});

TeamMember.belongsTo(Team, {
  foreignKey: 'team_id'
});

module.exports = { User, Team, TeamMember, Sport };