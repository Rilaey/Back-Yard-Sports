// getTeamData = async () => {
//     const response = await fetch('/api/card', {
//         method: 'GET',
//         headers: {
//         'Content-Type': 'application/json',
//         },
//     });
    
//     let tempCardTeams = [];
//     if (response.ok) {
//         tempCardTeams = await response.json();
//     }

//     else {
//         alert('Failed to get the team data');
//     }
// };

// getTeamData();
  
// joinTeam = async (CardTeamId) => {
//     const response = await fetch('/api/team/join', {
//         method: 'PUT',
//         body: JSON.stringify({
//         CardTeamId: CardTeamId
//         }),
//         headers: {
//         'Content-Type': 'application/json',
//         },
//     });

//     if (response.ok) {
//         $(`#joinTeam${CardTeamId}`).prop('disabled', true);
//         $(`#joinTeam${CardTeamId}`).text('Team Joined!');
//     }

//     else {
//         alert('Failed to join team.');
//     }
// }

// getTeamData();

// teamData = async () => {
//     const response = await fetch('/api/card', {
//       method: 'POST',
//       body: JSON.stringify({ teamName, sportName, cityName, stateName }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       alert('Pulled Card Data!');
//       console.log("\nthis is my card data: " + response + "\n");
//     } 
    
//     else {
//       alert('Unable To Pull Card Data!');
//     }
// };


// teamData();