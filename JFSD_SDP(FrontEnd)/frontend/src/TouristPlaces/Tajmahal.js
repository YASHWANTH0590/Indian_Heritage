// src/components/TajMahalPage.js
import React from 'react';
import './TajMahal.css';  // Import the CSS file for styling
import tajMahalImage from '../Images/taj_mahal.jpg';  // Local import for the image

const TajMahalPage = () => {
  return (
    <div className="tajmahal-container">
      <section className="img">
        <img src={tajMahalImage} alt="Taj Mahal" className="hero-image" />
      </section>

        <h2 className='about'>About the Taj Mahal</h2>
      <section className="details">
        <p>
          The Taj Mahal is a stunning white marble mausoleum situated in the city of Agra, in the state of Uttar Pradesh, India. 
          This architectural marvel was commissioned in 1632 by the Mughal emperor Shah Jahan to enshrine the tomb of his beloved wife,
           Mumtaz Mahal, who tragically passed away during childbirth. The emperor's grief and love for his wife were the driving forces 
           behind the creation of this magnificent structure, which took around 22 years to complete, with an estimated completion date in 1653. 
           The Taj Mahal stands as a symbol of eternal love and devotion, as well as an extraordinary feat of architectural achievement.
          The design of the Taj Mahal combines elements from Persian, Ottoman Turkish, Indian, and Islamic architectural styles, making it a 
          unique example of Mughal architecture. The main structure is made of white marble, which was sourced from Makrana, Rajasthan, and is 
          intricately adorned with delicate carvings, inlay work, and beautiful calligraphy. 
        </p>
        <p>The mausoleum is set within a large complex that 
          includes expansive gardens, a reflecting pool, and various other buildings, including a mosque and a guest house, all harmoniously 
          designed to enhance the beauty of the central tomb. Over the centuries, the Taj Mahal has not only remained a symbol of love but 
          has also become one of the most iconic landmarks in the world, attracting millions of visitors annually from all over the globe. 
          Its timeless beauty, breathtaking symmetry, and intricate artistry have earned it recognition as one of the Seven Wonders of the World. 
          It has been declared a UNESCO World Heritage Site, and its influence on architecture, art, and culture continues to inspire generations 
          around the world. The Taj Mahal stands as a testament to the enduring legacy of the Mughal dynasty and the eternal love between 
          Shah Jahan and Mumtaz Mahal.</p>

        <h3 className='about'>Commissioning and Construction (1631–1653)
        </h3>
        <p>The Taj Mahal was commissioned by Emperor Shah Jahan in 1632 in memory of his beloved wife, Mumtaz Mahal, who died in childbirth in 1631.
           Mumtaz was Shah Jahan’s third wife and his favorite, and her death left him devastated. To honor her, he decided to build a 
           grand mausoleum that would symbolize his deep love and mourning.
        </p>
        <p>Construction began in 1632 and lasted for approximately 22 years, with the mausoleum itself being completed in 1653. 
          The project involved the efforts of thousands of workers, including skilled artisans, architects, laborers, and craftsmen,
           many of whom were brought from across the Mughal Empire and beyond. The chief architect is believed to be Ustad Ahmad Lahauri,
            though other experts also contributed to its design, including Persian and Indian artisans.
            </p>

        <h3 className='about'>Builder</h3>
        <p>
          The Taj Mahal was commissioned by Shah Jahan, the Mughal emperor, in memory of his wife Mumtaz Mahal, who died during childbirth in 1631. 
          Shah Jahan, who was deeply in love with Mumtaz Mahal, wanted to build a monument that would symbolize his eternal love for her.
        </p>

        <h3 className='about'>Built Year</h3>
        <p>The construction of the Taj Mahal began in 1632 and was completed in 1653, taking 22 years to build.</p>

        <h3 className='about'>Location</h3>
        <a href="https://g.co/kgs/YWrKEjY" target="_blank">Agra, Uttar Pradesh, India</a>

        <h3 className='about'>Interesting Facts</h3>
        <ul>
          <li>The Taj Mahal is made of white marble, and the structure is a combination of Indian, Persian, Ottoman Turkish, and Mughal architectural styles.</li>
          <li>More than 20,000 artisans worked on the construction of the Taj Mahal.</li>
          <li>The Taj Mahal is a symbol of eternal love and is often regarded as one of the most beautiful buildings in the world.</li>
          <li>The main dome stands 35 meters tall and is surrounded by four smaller domes and minarets.</li>
          <li>The Taj Mahal changes color throughout the day, appearing pink in the morning, white in the afternoon, and golden under moonlight.</li>
        </ul>
      </section>

      <section className="visit">
        <h3>Plan Your Visit</h3>
        <p>
          The Taj Mahal is open every day except Fridays. Visitors can explore the main mausoleum, its beautiful gardens, and the surrounding area.
          You can also take guided tours to learn more about the rich history and architecture of the monument.
        </p>
        <p><strong>Opening Hours:</strong> Open "30min before sunrise" and Closes "30mins before sunset".(Closed on  Every Fridays)</p>
        <p><strong>Entry Fee:</strong> Entry fees vary for domestic and international visitors. Please check the official website for updated information.</p>
      </section>
    </div>
  );
}

export default TajMahalPage;
