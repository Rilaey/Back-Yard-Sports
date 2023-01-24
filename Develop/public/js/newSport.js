const newSportDataBase = async (event) => {
  event.preventDefault();

  const sportName = document.querySelector('#sport-name').value.trim();

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

document.querySelector('.new-sport').addEventListener('submit', newSportDataBase);
