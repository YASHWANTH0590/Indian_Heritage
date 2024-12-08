import React from 'react';
import './GoldenTemple.css';
import goldenTempleImage from '../Images/GoldenTemple.jpg';

const GoldenTemple = () => {
  return (
    <div className='main'>
      <h1 className='ab'>Golden Temple, Amritsar</h1>

      <section className="ime">
        <img src={goldenTempleImage} alt="Jaipur" className="he-image" />
        
      </section>
      <p>
        The Golden Temple, also known as Harmandir Sahib, is one of the most
        revered spiritual sites in India and a symbol of the Sikh faith. Located
        in the city of Amritsar, Punjab, it is a magnificent structure built around
        a pool of holy water, which pilgrims bathe in as part of their spiritual
        journey. The temple is renowned for its stunning golden facade and the
        serene environment that surrounds it.
      </p>

      <p>
        The Golden Temple was originally built in 1581 by the fourth Sikh Guru, Guru Ram Das.
        It has undergone multiple renovations over the centuries, with the golden plating being added
        by Maharaja Ranjit Singh in the 19th century. The temple is a blend of Indo-Saracenic, Mughal, and
        Persian architectural styles. Its significance goes beyond architecture—it represents equality,
        unity, and the central teachings of Sikhism.
      </p>

      <h2 className='about'>Important Facts</h2>
      <ul>
        <li>Location: Amritsar, Punjab, India</li>
        <li>History: Built in 1581 by Guru Ram Das and completed by Guru Arjan.</li>
        <li>Golden Plating: Added by Maharaja Ranjit Singh in the 19th century.</li>
        <li>Significance: Holiest Gurdwara for Sikhs.</li>
        <li>Open: Open 24/7, offering free entry for all visitors.</li>
      </ul>

      <h2 className='about'>What to See and Do at the Golden Temple:</h2>
      <ul>
        <li>Take a dip in the sacred Sarovar (holy water tank).</li>
        <li>Visit the Guru Granth Sahib, the holy scripture of Sikhism, placed in the inner sanctum.</li>
        <li>Enjoy the Langar (community kitchen), which serves free meals to thousands of visitors daily.</li>
        <li>Take a walk around the Harmandir Sahib and admire the stunning architecture.</li>
        <li>Witness the Palki Sahib Ceremony, a unique religious procession.</li>
      </ul>

      <h3 className='about'>Explore More About Golden Temple</h3>
      <p>
        For more details, visit the official website of the Golden Temple:{' '}
        <a
          href="https://www.srigranth.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Golden Temple Official Website
        </a>
      </p>

      <h3 className='about'>Nearby Attractions</h3>
      <ul>
        <li>
          <strong>Jallianwala Bagh:</strong> A historic site memorializing the tragic massacre of 1919.
        </li>
        <li>
          <strong>Partition Museum:</strong> A museum dedicated to the partition of India in 1947.
        </li>
        <li>
          <strong>Wagah Border:</strong> Witness the iconic border closing ceremony.
        </li>
      </ul>
    </div>
  );
};

export default GoldenTemple;
