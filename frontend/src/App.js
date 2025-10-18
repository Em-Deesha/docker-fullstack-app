import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/api/users`);
      setUsers(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch users. Make sure the backend is running.');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email) {
      alert('Please fill in all fields');
      return;
    }

    try {
      setIsAdding(true);
      const response = await axios.post(`${API_BASE_URL}/api/users`, newUser);
      setUsers([...users, response.data]);
      setNewUser({ name: '', email: '' });
      setError(null);
    } catch (err) {
      setError('Failed to add user');
      console.error('Error adding user:', err);
    } finally {
      setIsAdding(false);
    }
  };

  const handleInputChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🐳 Docker Full-Stack Application</h1>
        <p>Frontend + Backend with Docker Compose</p>
      </header>

      <main className="App-main">
        <div className="container">
          <div className="section">
            <h2>Add New User</h2>
            <form onSubmit={handleAddUser} className="user-form">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newUser.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newUser.email}
                onChange={handleInputChange}
                required
              />
              <button type="submit" disabled={isAdding}>
                {isAdding ? 'Adding...' : 'Add User'}
              </button>
            </form>
          </div>

          <div className="section">
            <h2>Users List</h2>
            {loading && <div className="loading">Loading users...</div>}
            {error && <div className="error">{error}</div>}
            {!loading && !error && (
              <div className="users-list">
                {users.length === 0 ? (
                  <p>No users found</p>
                ) : (
                  users.map(user => (
                    <div key={user.id} className="user-card">
                      <h3>{user.name}</h3>
                      <p>{user.email}</p>
                      <span className="user-id">ID: {user.id}</span>
                    </div>
                  ))
                )}
              </div>
            )}
            <button onClick={fetchUsers} className="refresh-btn">
              Refresh Users
            </button>
          </div>
        </div>
      </main>

      <footer className="App-footer">
        <p>Built with React + Node.js + Docker</p>
        <p>API URL: {API_BASE_URL}</p>
      </footer>
    </div>
  );
}

export default App;
