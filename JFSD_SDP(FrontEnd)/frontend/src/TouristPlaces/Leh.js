import React from 'react';
import './Leh.css';

const Leh = () => {
  return (
    <div className="leh-container">
      <section className="leh-gallery">
        <div className="gallery-item">
          <img src="leh-image1.jpg" alt="Leh Landscape" />
          <p>Stunning Mountain Views</p>
        </div>
        <div className="gallery-item">
          <img src="leh-image2.jpg" alt="Leh Monastery" />
          <p>Beautiful Monasteries</p>
        </div>
        <div className="gallery-item">
          <img src="leh-image3.jpg" alt="Leh Desert" />
          <p>Endless Deserts</p>
        </div>
      </section>

      <section className="leh-info">
        <h2>About Leh-Ladakh</h2>
        <p>Leh-Ladakh is a stunning region in the northern part of India, known for its barren beauty, monasteries, and adventurous trails.</p>
        <ul>
          <li>Altitude: 3500 meters</li>
          <li>Best Time to Visit: May to September</li>
          <li>Popular Activities: Trekking, Biking, River Rafting, Camping</li>
        </ul>
      </section>
    </div>
  );
};

export default Leh;
