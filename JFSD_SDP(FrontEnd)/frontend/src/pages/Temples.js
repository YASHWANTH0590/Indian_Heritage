import React from 'react';
import './Temple.css';

// Correcting the paths to reference the images correctly
import kedarnath from '../Images/Kedarnath_Temple.jpg';
import goldenTemple from '../Images/Golden_Temple.jpg';
import konarkSunTemple from '../Images/Sun_Temple_Konark.jpg';
import shirdiSaiBaba from '../Images/Shirdi_Sai_Baba_Temple.jpg';
import tirumala from '../Images/Tirumala_Tirupati_Devasthanam.jpg';
import meenakshi from '../Images/Meenakshi_Amman_Temple.jpg';
import badrinath from '../Images/Badrinath_temple.jpg';
import dakshineswar from '../Images/Dakshineswar_Kali_Temple.jpg';
import gangaikonda from '../Images/Gangaikonda_Cholapuram_Temple.jpg';
import padmanabhaswamy from '../Images/Padmanabhaswamy_Temple.jpg';
import jagannath from '../Images/Jagannath_Temple_Of_Puri.jpg';
import ramanathaswamy from '../Images/Ramanathaswamy_Temple_Rameswaram.jpg';
import khajuraho from '../Images/Temple_of_Vishnu_at_Khajuraho.jpg';

const Temple = ({ image, title, locationLink }) => (
  <div className="temple-card">
    <div className="temple-card-content">
      <img className="temple-card-image" src={image} alt={title} />
      <p className="temple-card-paragraph">{title}</p>
      <button className="temple-card-button">
        <a href={locationLink} target="_blank" rel="noopener noreferrer">Location</a>
      </button>
    </div>
  </div>
);

const Temples = () => {
  const cards = [
    { image: kedarnath, title: 'Kedarnath Temple', locationLink: 'https://maps.app.goo.gl/h5x6nQCgYohJd2uT7' },
    { image: goldenTemple, title: 'Golden Temple', locationLink: 'https://maps.app.goo.gl/q6tzdRbVhN3MEksH7' },
    { image: konarkSunTemple, title: 'Konark Sun Temple', locationLink: 'https://maps.app.goo.gl/iLhkfuMeiDcZD1Nf9' },
    { image: shirdiSaiBaba, title: 'Shirdi Sai Baba Temple', locationLink: 'https://maps.app.goo.gl/X6H8kLaHzUZRkBLW8' },
    { image: tirumala, title: 'Tirumala Venkateswara Temple', locationLink: 'https://maps.app.goo.gl/oWuTuBuNmRQ2HYGt9' },
    { image: meenakshi, title: 'Meenakshi Temple', locationLink: 'https://maps.app.goo.gl/QWJjsT4EsxzLPfELA' },
    { image: badrinath, title: 'Badrinath Temple', locationLink: 'https://maps.app.goo.gl/tEt9A2e651VV6vqh9' },
    { image: dakshineswar, title: 'Dakshineswar Kali Temple', locationLink: 'https://maps.app.goo.gl/UksMufACQ3D4MUhj8Lqp4uKLXKCH79' },
    { image: padmanabhaswamy, title: 'Padmanabhaswamy Temple', locationLink: 'https://goo.gl/maps/JnDEvF1qZTm' },
    { image: jagannath, title: 'Jagannath Temple', locationLink: 'https://maps.app.goo.gl/Xc2FJPCqpVhb2AbA8' },
    { image: ramanathaswamy, title: 'Ramanathaswamy Temple', locationLink: 'https://maps.app.goo.gl/9JCGCUgDwDS7xMAYA' },
    { image: khajuraho, title: 'Khajuraho Temple', locationLink: 'https://maps.app.goo.gl/tbqT359kZ1whQrpR9' }
  ];

  return (
    <div className="temple-card-section">
      {cards.map((card, index) => (
        <Temple key={index} image={card.image} title={card.title} locationLink={card.locationLink} />
      ))}
    </div>
  );
};

export default Temples;
