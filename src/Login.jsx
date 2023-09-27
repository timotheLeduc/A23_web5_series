import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Login = ({ setUsername }) => {
  const [username, setUsernameInput] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password.');
    } else {
      
      setUsername(username);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <div>
        <input 
          className="login-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
      </div>
      <div>
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
     
      <Link to="/series-trending">
        <button className="login-button" onClick={handleLogin}>Login</button>
      </Link>

     
    </div>
  );
};

export default Login;

