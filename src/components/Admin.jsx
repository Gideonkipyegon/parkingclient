import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './admin.css'
function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check admin credentials (this is a basic example, in a real app, you'd perform server-side authentication)
    if (username === 'admin' && password === 'password') {
      // Successful login, navigate to admin panel
      history.push('/admin/dashboard');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className='admin'>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} className='adminform'>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
