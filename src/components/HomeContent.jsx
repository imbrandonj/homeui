// external imports:
import { useState } from 'react';

// internal modules:
import { getName } from '../modules/storage.js';

import '../styles/content.css';

export default function HomeContent() {
  const [username, setUsername] = useState(getName());
  const [newUsername, setNewUsername] = useState('');

  console.log('render! name: ', username);

  const storeName = event => {
    event.preventDefault();
    localStorage.setItem('name', newUsername);
    setUsername(newUsername);
  };

  if (username === 'undefined' || username === null) {
    return (
      <div className="content">
        <h1>Welcome home.</h1>
        <form onSubmit={storeName}>
          <input
            placeholder="My name is..."
            value={newUsername}
            onChange={event => setNewUsername(event.target.value)}
          />
        </form>
      </div>
    );
  } else {
    return (
      <div className="content">
        <h1>Welcome home</h1>
        <h2>{username}</h2>
      </div>
    );
  }
}
