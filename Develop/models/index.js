const User = require("./User");
const Team = require("./Team");
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

Sport.hasMany(User, {
  foreignKey: "sports_played",
  onDelete: "CASCADE",
});

User.belongsTo(Sport, {
  foreignKey: "sports_played",
});

////////////////////////////////
User.hasMany(Sport, {
  foreignKey: "players",
  onDelete: "CASCADE",
});

Sport.belongsTo(User, {
  foreignKey: "players",
});

////////////////////////////////

Team.hasMany(User, {
  foreignKey: "teams",
  onDelete: "CASCADE",
});

User.belongsTo(Team, {
  foreignKey: "teams",
});

module.exports = { User, Team, Sport };
