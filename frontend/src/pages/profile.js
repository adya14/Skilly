import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from API
    axios.get('/api/users/1') // Replace with actual user ID
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Location: {user.location}</p>
          <h2>Skills Offered</h2>
          <ul>
            {user.skillsOffered.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
          <h2>Skills Wanted</h2>
          <ul>
            {user.skillsWanted.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
