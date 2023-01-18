const seedSportsData = require("./sportSeeds");
const seedTeamData = require("./teamSeeds");
const seedUserData = require("./userSeeds");

const seedDataBase = async () => {
  await sequelize.sync({ force: true });

  await seedUserData();
  console.log("*****USERS SEEDED*****");

  await seedSportsData();
  console.log("*****SPORTS SEEDED*****");

  await seedTeamData();
  console.log("*****TEAMS SEEDED*****");
};

seedDataBase();