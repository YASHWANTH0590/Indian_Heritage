import React from 'react';
import river_rafting from '../Images/Reshikesh.jpg';
import bungee from '../Images/bungee.jpg';
import LandScapes from '../Images/RishikeshLandscapes.jpg';
const Resh = () => {
  return (
    <div style={styles.container}>


      {/* Gallery Section */}
      <section style={styles.gallery}>
        <div style={styles.galleryItem}>
        <img src={river_rafting} alt="River Rafting" style={styles.galleryImage} />
          <p style={styles.galleryText}>Thrilling River Rafting</p>
        </div>
        <div style={styles.galleryItem}>
        <img src={bungee} alt="bungee" style={styles.galleryImage} />

          <p style={styles.galleryText}>Exciting Bungee Jumping</p>
        </div>
        <div style={styles.galleryItem}>
        <img src={LandScapes} alt="River Rafting" style={styles.galleryImage} />

          <p style={styles.galleryText}>Serene Landscapes</p>
        </div>
      </section>

      {/* Information Section */}
      <section style={styles.info}>
        <h2 style={styles.infoHeading}>About Rishikesh</h2>
        <p style={styles.infoText}>
          Rishikesh, known as the "Yoga Capital of the World," is also a hub for
          adventure activities like river rafting and bungee jumping. Located on
          the banks of the Ganges, it offers breathtaking views of the Himalayas
          and is a spiritual haven for many.
        </p>

        <h3 style={styles.subHeading}>Popular Activities</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>River Rafting</li>
          <li style={styles.listItem}>Bungee Jumping</li>
          <li style={styles.listItem}>Yoga and Meditation</li>
          <li style={styles.listItem}>Trekking and Camping</li>
        </ul>

        <h3 style={styles.subHeading}>Adventure Details</h3>
        <div style={styles.activityDetails}>
          <div style={styles.activity}>
            <h4 style={styles.activityHeading}>River Rafting</h4>
            <p style={styles.activityText}>
              Experience the thrill of rafting in the Ganges! The rapids are
              classified from easy to difficult, suitable for both beginners and
              experts.
            </p>
          </div>
          <div style={styles.activity}>
            <h4 style={styles.activityHeading}>Bungee Jumping</h4>
            <p style={styles.activityText}>
              Rishikesh is home to India's highest bungee jumping platform. Leap
              from 83 meters above the ground and enjoy an adrenaline rush!
            </p>
          </div>
        </div>
      </section>

     
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f8f8f8',
  },
  
  headerTitle: {
    fontSize: '3rem',
  },
  headerSubtitle: {
    fontSize: '1.5rem',
  },
  gallery: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '30px 0',
  },
  galleryItem: {
    width: '30%',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  galleryImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  galleryText: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: '1rem',
  },
  info: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#fff',
    marginBottom: '40px',
  },
  infoHeading: {
    fontSize: '2rem',
    color: '#4CAF50',
  },
  infoText: {
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '1.5rem',
    color: '#4CAF50',
    marginTop: '30px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '1.2rem',
    color: '#555',
  },
  listItem: {
    margin: '10px 0',
  },
  activityDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  activity: {
    width: '45%',
    backgroundColor: '#f1f1f1',
    padding: '20px',
    borderRadius: '8px',
  },
  activityHeading: {
    fontSize: '1.5rem',
    color: '#4CAF50',
  },
  activityText: {
    fontSize: '1rem',
    color: '#555',
  }
};

export default Resh;
