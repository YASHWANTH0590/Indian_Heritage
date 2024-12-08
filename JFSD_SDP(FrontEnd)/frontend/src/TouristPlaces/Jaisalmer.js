import React from 'react';
import fort from '../Images/JaisalmerFort.jpg';
import camel from '../Images/CamelSafari.jpg';
import haveli from '../Images/PatwonKiHaveli.jpg';
import desert from '../Images/TharDesert.jpg';

const Jaisalmer = () => {
  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      lineHeight: 1.6,
      margin: 0,
      padding: 0,
      backgroundColor: '#fafafa',
      color: '#333',
      marginBottom: '80px', 
      
    },
    section: {
        padding: '20px',
        margin: '20px auto',
        maxWidth: '1200px',
        backgroundColor: '#fff',
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)', // Increased intensity
        borderRadius: '10px',
      },
      
    aboutHeader: {
      fontSize: '2.5rem',
      color: '#d4a017',
      textAlign: 'center',
    },
    aboutText: {
      fontSize: '1.1rem',
      marginBottom: '15px',
    },
    gallery: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
    },
    galleryItem: {
      width: '240px',
      textAlign: 'center',
    },
    galleryImage: {
      width: '100%',
      height: '180px',
      borderRadius: '10px',
      objectFit: 'cover',
    },
    galleryCaption: {
      marginTop: '10px',
      fontWeight: 'bold',
    },
    highlightsHeader: {
      fontSize: '2rem',
      color: '#d4a017',
    },
    highlightsList: {
      listStyleType: 'square',
      marginLeft: '20px',
      fontSize: '1.1rem',
    },
    cultureHeader: {
      fontSize: '2rem',
      color: '#d4a017',
    },
    cultureText: {
      fontSize: '1.1rem',
    },
    adventuresHeader: {
      fontSize: '2rem',
      color: '#d4a017',
    },
    adventureList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
    },
    adventureItem: {
      flex: 1,
      backgroundColor: '#f9f9f9',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    adventureTitle: {
      fontSize: '1.5rem',
      color: '#d4a017',
    },
    adventureText: {
      fontSize: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      {/* About Jaisalmer Section */}
      <section style={styles.section}>
        <h1 style={styles.aboutHeader}>About Jaisalmer</h1>
        <p style={styles.aboutText}>
          Jaisalmer, fondly known as the "Golden City," is located in the
          heart of the Thar Desert in Rajasthan, India. Renowned for its
          yellow sandstone architecture, the city is a mesmerizing blend of
          history, culture, and natural beauty. It is named after Maharawal
          Jaisal Singh, its founder, who established it in 1156 AD.
        </p>
        <p style={styles.aboutText}>
          The city is dominated by the Jaisalmer Fort, one of the largest forts
          in the world, which continues to house families, shops, and temples.
          Jaisalmer is also famous for its intricate Havelis, vibrant culture,
          desert adventures, and folk music.
        </p>
      </section>

      {/* Gallery Section */}
      <section style={styles.section}>
        <div style={styles.gallery}>
          <div style={styles.galleryItem}>
            <img src={fort} alt="Jaisalmer Fort" style={styles.galleryImage} />
            <p style={styles.galleryCaption}>
              Jaisalmer Fort - The Pride of Rajasthan
            </p>
          </div>
          <div style={styles.galleryItem}>
            <img src={camel} alt="Camel Safari" style={styles.galleryImage} />
            <p style={styles.galleryCaption}>
              Camel Safari - Exploring the Thar Desert
            </p>
          </div>
          <div style={styles.galleryItem}>
            <img
              src={haveli}
              alt="Patwon Ki Haveli"
              style={styles.galleryImage}
            />
            <p style={styles.galleryCaption}>
              Patwon Ki Haveli - A Masterpiece of Architecture
            </p>
          </div>
          <div style={styles.galleryItem}>
            <img src={desert} alt="Thar Desert" style={styles.galleryImage} />
            <p style={styles.galleryCaption}>Thar Desert - The Majestic Sands</p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section style={styles.section}>
        <h2 style={styles.highlightsHeader}>Highlights of Jaisalmer</h2>
        <ul style={styles.highlightsList}>
          <li>
            <strong>Jaisalmer Fort:</strong> A UNESCO World Heritage Site and a
            living fort.
          </li>
          <li>
            <strong>Desert Camping:</strong> Luxurious tent stays with cultural
            performances under starry skies.
          </li>
          <li>
            <strong>Folk Music and Dance:</strong> Experience the Kalbeliya
            dance and traditional Rajasthani music.
          </li>
          <li>
            <strong>Sam Sand Dunes:</strong> Perfect for sunset views and
            thrilling dune bashing.
          </li>
          <li>
            <strong>Jain Temples:</strong> Exquisite temples located within the
            fort, adorned with intricate carvings.
          </li>
        </ul>
      </section>

      {/* Cultural Activities */}
      <section style={styles.section}>
        <h2 style={styles.cultureHeader}>Culture and Traditions</h2>
        <p style={styles.cultureText}>
          Jaisalmer is a cultural treasure trove that showcases Rajasthan’s
          rich heritage. The locals take immense pride in their customs and
          traditions, which are evident in their attire, cuisine, and
          celebrations. Festivals like the Jaisalmer Desert Festival bring the
          city to life with camel races, turban-tying competitions, and folk
          performances.
        </p>
      </section>

      {/* Adventure Activities */}
      <section style={styles.section}>
        <h2 style={styles.adventuresHeader}>Adventure Activities</h2>
        <div style={styles.adventureList}>
          <div style={styles.adventureItem}>
            <h3 style={styles.adventureTitle}>Camel Safari</h3>
            <p style={styles.adventureText}>
              Traverse the vast dunes of the Thar Desert on a camel, an
              unforgettable experience that takes you through remote desert
              villages.
            </p>
          </div>
          <div style={styles.adventureItem}>
            <h3 style={styles.adventureTitle}>Jeep Safari</h3>
            <p style={styles.adventureText}>
              Explore the rugged terrain of the desert with an adrenaline-pumping
              jeep safari that offers stunning views of the landscape.
            </p>
          </div>
          <div style={styles.adventureItem}>
            <h3 style={styles.adventureTitle}>Parasailing</h3>
            <p style={styles.adventureText}>
              For adventure enthusiasts, parasailing over the golden sands is a
              must-try activity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jaisalmer;
