import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useStorage } from "./hooks/useStorage";
import { useEffect } from 'react';

const Login = ({ setUsername }) => {
  const [username, setUsernameInput] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function
  console.log(username);
  const {saveToStorage, getFromStorage} = useStorage("posts-");
  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password.');
    } else {
      saveToStorage("username", username);
      setUsername(username);
      navigate('/'); // Navigate to the home page after successful login
    }
  };
  // const savedUser = getFromStorage("username");
  useEffect(() => {
    const savedUser = localStorage.getItem("posts-username");
    console.log("Saved User from localStorage:", savedUser);
    if (savedUser) {
      setUsername(savedUser);
      
    }
  }, []);
  

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

