const loginUser = async (event) => {
    event.preventDefault();
  
    // user inputs from login form
    const email = document.querySelector('id for the login email field').value.trim();
    const password = document.querySelector('id for the login password field').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('route to fetch at the api endpoint for user for login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the home page
        document.location.replace('/');
        alert('Logged in!')
      } else {
        alert(response.statusText);
      }
    }
  };

  const signUpUser = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('id for the create user field field').value.trim();
    const email = document.querySelector('id for the create user email field').value.trim();
    const password = document.querySelector('id for the create user password field').value.trim();
  
    if (username && email && password) {
      const response = await fetch('route to fetch at the api endpoint for user create', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
        alert("User Created!")
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('.login-form').addEventListener('submit', loginUser);
  
  document.querySelector('.signup-form').addEventListener('submit', signUpUser);