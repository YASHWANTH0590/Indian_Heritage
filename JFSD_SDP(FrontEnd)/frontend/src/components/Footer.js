import React from 'react';
import './Footer.css'; // Import CSS

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamic year

  return (
    <footer className="footer">
      <p className="footer-text">
        © {currentYear} Indian Heritage and Culture. All Rights Reserved.

 
      </p>
    </footer>
  );
};

export default Footer;
