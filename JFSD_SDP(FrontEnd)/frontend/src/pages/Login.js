  // src/components/Login.js
  import React, { useState } from 'react';
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';
  import './Login.css';

  const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
      event.preventDefault(); // Prevent default form submission
      try {
        const response = await axios.post('http://localhost:8080/api/users/login', {
          email,
          password,
        });

        switch (response.data) {
          case "Email not registered!":
            alert('Email not registered!');
            break;
          case "Invalid credentials!":
            alert('Invalid credentials. Please try again.');
            break;
          case "Login successful!":
            console.log('Login successful:', response.data);
            localStorage.setItem('loggedInUser', JSON.stringify(response.data));
            navigate('/dashboard'); // Ensure this route exists in App.js
            break;
          default:
            alert('An unexpected error occurred.');
            console.error('Unexpected response data:', response.data);
        }
      } catch (error) {
        console.error('Error logging in:', error.message);
        alert('An error occurred. Please try again.');
      }
    };

    return (
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <h3>Welcome back!</h3> {/* Added welcome message */}
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
            <p className="signup-text">
              Don't have an account?{' '}
              <button
                type="button"
                className="signup-button"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  };

  export default Login;
