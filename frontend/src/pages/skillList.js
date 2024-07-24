import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SkillList() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch skills from API
    axios.get('/api/skills')
      .then(response => setSkills(response.data))
      .catch(error => console.error('Error fetching skills:', error));
  }, []);

  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {skills.map(skill => (
          <li key={skill._id}>{skill.name} - {skill.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillList;
