import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../pages/GlobalStyles.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleCreateAccount = () => {
    // Handle create account logic here
  };

  return (
    <div className="log">
      <div className="login-container">
        <h1>Login</h1>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="button-group">
          <Link to="/home" className="login-btn" onClick={handleLogin}>
            Login
          </Link>
          <Link to="/manage_user" className="login-btn" onClick={handleCreateAccount}>
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
