import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import profile1 from '../Images/profile1.png';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate('/'); 
  };

  const goToUserDashboard = () => {
    navigate('/user-dashboard');
  };

  return (
    <header className='header'>
      <h1 className='header-text'>Indian Heritage and Cultures</h1>

      <div className="profile-container" onClick={toggleProfile}>
        <img 
          src={profile1}  
          alt="User Profile"
          className="profile-icon"
        />
      </div>
      {isProfileOpen && (
        <div className="profile-modal">
          <div className="profile-modal-content">
            <ul className="profile-options">
              <li><a href="/contact">Contact Us</a></li>
              <li onClick={goToUserDashboard} style={{ cursor: 'pointer' }}>User Dashboard</li>
              <li onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
