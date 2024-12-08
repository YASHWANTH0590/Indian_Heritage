import React from 'react';
import templegaya from '../Images/gayatemple.jpg'; // Replace with your image path
import buddhaStatue from '../Images/greatBuddhaStatue.jpg'; // Replace with your image path
import buddhaStupa from '../Images/buddhaStupa.jpg'; // Replace with your image path
import bodhiTree from '../Images/bodhiTree.jpg'; // Replace with your image path

const Gaya = () => {
  return (
    <div style={styles["gaya-container"]}>
      {/* About Section */}
      <section style={styles["gaya-section"]}>
        <h1 style={styles["gaya-about-header"]}>About Bodh Gaya</h1>
        <p style={styles["gaya-about-text"]}>
          Bodh Gaya is one of the most sacred pilgrimage sites for Buddhists. Located in Bihar, India, it is the place where Lord Buddha attained enlightenment under the Bodhi Tree. This UNESCO World Heritage Site is known for its serene ambiance, spiritual significance, and magnificent temples.
        </p>
        <p style={styles["gaya-about-text"]}>
          The Mahabodhi Temple, a 7th-century architectural masterpiece, stands as a symbol of peace and enlightenment. Visitors from all over the world come to meditate and explore the cultural richness of this spiritual haven.
        </p>
      </section>

      {/* Highlights Section */}
      <section style={styles["gaya-section"]}>
        <h2 style={styles["gaya-highlights-header"]}>Key Highlights of Bodh Gaya</h2>
        <ul style={styles["gaya-highlights-list"]}>
          <li>The Mahabodhi Temple: A UNESCO World Heritage Site.</li>
          <li>The sacred Bodhi Tree: The site of Lord Buddha's enlightenment.</li>
          <li>Various monasteries built by international Buddhist communities.</li>
          <li>Calm and spiritual environment perfect for meditation and self-reflection.</li>
        </ul>
      </section>

      {/* Gallery Section */}
      <section style={styles["gaya-section"]}>
        <h2 style={styles["gaya-highlights-header"]}>Gallery</h2>
        <div style={styles["gaya-gallery"]}>
          <div style={styles["gaya-gallery-item"]}>
            <img
              src={templegaya} // Your local image path
              style={styles["gaya-gallery-image"]}
              alt="Mahabodhi Temple"
            />
            <p style={styles["gaya-gallery-caption"]}>Mahabodhi Temple</p>
          </div>
          <div style={styles["gaya-gallery-item"]}>
            <img
              src={buddhaStatue} // Your local image path
              alt="Great Buddha Statue"
              style={styles["gaya-gallery-image"]}
            />
            <p style={styles["gaya-gallery-caption"]}>Great Buddha Statue</p>
          </div>
          <div style={styles["gaya-gallery-item"]}>
            <img
              src={buddhaStupa} // Your local image path
              alt="Buddha Stupa"
              style={styles["gaya-gallery-image"]}
            />
            <p style={styles["gaya-gallery-caption"]}>Buddha Stupa</p>
          </div>
          <div style={styles["gaya-gallery-item"]}>
            <img
              src={bodhiTree} // Your local image path
              alt="Bodhi Tree"
              style={styles["gaya-gallery-image"]}
            />
            <p style={styles["gaya-gallery-caption"]}>Bodhi Tree</p>
          </div>
        </div>
      </section>

      {/* Cultural Aspects Section */}
      <section style={styles["gaya-section"]}>
        <h2 style={styles["gaya-culture-header"]}>Cultural and Spiritual Significance</h2>
        <p style={styles["gaya-culture-text"]}>
          Bodh Gaya serves as a melting pot of cultures, attracting visitors from across the globe. Monasteries and meditation centers established by international Buddhist communities are located in Bodh Gaya. The spiritual atmosphere here is one of peace and enlightenment, making it a prime destination for travelers seeking peace of mind.
        </p>
      </section>
    </div>
  );
};

const styles = {
  "gaya-container": {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  "gaya-section": {
    marginBottom: '40px',
  },
  "gaya-about-header": {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  "gaya-about-text": {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    textAlign: 'justify',
    marginBottom: '20px',
  },
  "gaya-highlights-header": {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  "gaya-highlights-list": {
    listStyleType: 'square',
    fontSize: '1.1rem',
    textAlign: 'left',
    marginLeft: '20px',
  },
  "gaya-gallery": {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '20px',
    marginLeft:'250px',
  },
  "gaya-gallery-item": {
    textAlign: 'center',
  },
  "gaya-gallery-image": {
    width: '100%',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  "gaya-gallery-caption": {
    marginTop: '10px',
    fontSize: '1rem',
    fontStyle: 'italic',
  },
  "gaya-culture-header": {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  "gaya-culture-text": {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    textAlign: 'justify',
  },
};

export default Gaya;
