// src/pages/About.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './About.css'; // Optional CSS for styling

const About = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const goToHome = () => {
    navigate('/'); // Navigate to the home route
  };

  return (
    <div className="about-container">
      <h1 className='main'>About Our Project</h1>
      <p>
        Welcome to our project! This application is designed to inspire awareness of Indian culture, 
        heritage, historical places, and famous monuments. Our goal is to provide users with a virtual experience 
        that helps them learn and explore India's rich history and traditions.
      </p>

      <h2>Technologies Used</h2>
      <ul>
        <li><strong>Frontend:</strong> React, HTML, CSS</li>
        <li><strong>Backend:</strong> Spring Boot, Java</li>
        <li><strong>Database:</strong> MySQL</li>
        <li><strong>Server:</strong> Tomcat Server 9</li>
      </ul>

      <h2>Features Implemented</h2>
      <ul>
        <li>User authentication with login and signup functionality</li>
        <li>Interactive pages about Indian heritage, monuments, and cultures</li>
        <li>Virtual tours to explore historical places</li>
        <li>Feedback section to gather user insights</li>
      </ul>

      <h2>How We Built It</h2>
      <p>
        Our development process followed a structured approach. We began by identifying the key components 
        of Indian culture to be highlighted. We created wireframes and designed the UI using React for a 
        seamless frontend experience. On the backend, we used Java with Spring Boot for building APIs, and MySQL for 
        managing user data efficiently.
      </p>
      <p>
        Throughout the development, we deployed the application on the Tomcat server and continuously tested 
        it to ensure smooth functionality across all pages.
      </p>

      <h2>Challenges We Faced</h2>
      <p>
        One of the biggest challenges was creating interactive virtual tours that could engage users effectively. 
        Additionally, integrating frontend and backend components required close coordination. However, 
        by dividing tasks and following agile development practices, we overcame these challenges.
      </p>

      <h2>Future Enhancements</h2>
      <p>
        In the future, we plan to add more interactive elements such as quizzes and multimedia content. 
        We also aim to optimize the app for mobile devices to reach a wider audience.
      </p>

      {/* Home Button */}
      <button className="home-button" onClick={goToHome}>
        Home
      </button>
    </div>
  );
};

export default About;
