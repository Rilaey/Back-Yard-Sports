module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  isSelected: (whereValue, selectValue) => {
    if (whereValue === selectValue) {
      return true;
    } else {
      return false;
    }
  },
  isMemberOfTeam: (teams, teamId) => {
    let membership = false
    console.log('Teams', teams);
    console.log('teamId', teamId);
    teams.forEach((team) => {
      console.log(team.id);
      if (team.id === teamId) {
        console.log('Is a member of the team!')
        membership = true;
      }
    });
    return membership;
  }
};