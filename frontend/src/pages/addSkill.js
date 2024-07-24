import React, { useState } from 'react';
import axios from 'axios';

function AddSkill() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSkill = { name, description };
    try {
      await axios.post('/api/skills', newSkill);
      alert('Skill added successfully');
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error adding skill:', error);
    }
  };

  return (
    <div>
      <h1>Add Skill</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Description</label>
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </div>
        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
}

export default AddSkill;
