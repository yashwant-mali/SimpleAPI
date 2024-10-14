// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(() => alert('Error fetching users.'));
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
