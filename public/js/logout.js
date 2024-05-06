const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        // if logout go back to login page
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  };
  
  document.getElementById('logout').addEventListener('click', logout);