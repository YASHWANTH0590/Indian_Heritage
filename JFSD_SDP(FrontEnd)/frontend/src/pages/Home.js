import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="heading">Welcome to The Incredible India</h1>
      <p className='para'>
        Discover the rich tapestry of India's heritage, culture, and traditions. 
        From breathtaking landscapes to historic monuments, immerse yourself in the 
        diverse experiences that our country has to offer. India is home to majestic mountains, 
        serene rivers, and lush forests, providing a backdrop for adventure and exploration. 
        Experience the vibrant colors and sounds of traditional festivals celebrated with great fervor, 
        showcasing the unity in diversity that defines the nation. Indulge in an array of culinary delights, 
        from spicy street food to exquisite regional dishes, each telling a story of its origin. 
        Engage with the warm hospitality of the people, who are eager to share their traditions, 
        stories, and customs. Whether you are wandering through ancient temples, participating in local art forms, 
        or simply enjoying the beauty of nature, every moment spent in India is a celebration of life and a journey through time.
      </p>
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/signup')}>Sign Up</button>
      <button onClick={() => navigate('/contact')}>Contact</button>
      <button onClick={() => navigate('/about')}>About</button>
    </div>
  );
};

export default Home;
