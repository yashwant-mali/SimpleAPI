// src/UserCard.js
import React from 'react';

function UserCard({ user }) {
  return (
    <div style={{
      border: '1px solid #ddd', margin: '10px', padding: '10px', width: '200px',
      borderRadius: '8px', textAlign: 'center'
    }}>
      <img src={user.avatar_url} alt={user.login} style={{ width: '100px', borderRadius: '50%' }} />
      <h3>{user.login}</h3>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
    </div>
  );
}

export default UserCard;
