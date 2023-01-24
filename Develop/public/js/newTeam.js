const newTeamDataBase = async (event) => {
    event.preventDefault();
  
    const teamName = document.querySelector('#team-name').value.trim();
    const teamSport = document.querySelector('#team-name').value.trim();
    const teamZipCode = document.querySelector('#team-zip-code').value.trim();
    const teamCity = document.querySelector('#team-city').value.trim();
    const teamState = document.querySelector('#team-state').value.trim();
  
    if (sportName) {
      const response = await fetch('/api/sport/newSport', {
        method: 'POST',
        body: JSON.stringify({ sportName }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if(response.ok) {
          alert('Sport Created!')
      } else {
          alert(response.statusText)
      }
    }
  };
  
  document.querySelector('.new-team').addEventListener('submit', newTeamDataBase);