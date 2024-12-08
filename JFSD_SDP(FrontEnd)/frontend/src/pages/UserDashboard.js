import React, { useEffect, useState } from 'react';
import './UserDashboard.css';

const UserDashboard = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser && loggedInUser.name) {
      setUserName(loggedInUser.name); 
    } else {
      setUserName('User'); 
    }
  }, []);

  return (
    <div className="user-dashboard">
      <h2>Welcome, {userName}!</h2>
      <p>Here you can manage your account, view activities, and more.</p>
      <div className="user-dashboard-links">
        <ul>
          <li><a href="/">View Profile</a></li>
          <li><a href="/">Account Settings</a></li>
          <li><a href="/">View History</a></li>
          <li><a href="/feedback">Submit Feedback</a></li>
          </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
