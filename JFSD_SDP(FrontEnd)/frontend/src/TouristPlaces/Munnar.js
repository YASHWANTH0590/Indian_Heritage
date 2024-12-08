import React from "react";
import munnar1 from "../Images/Munnar.jpg";
import munnar2 from  "../Images/Munnar.jpg"
import munnar3 from "../Images/Munnar.jpg";

const Munnar = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Discover the Beauty of Munnar</h1>
      </header>
      <section style={styles.content}>
        <p style={styles.description}>
          Nestled in the Western Ghats of Kerala, Munnar is a breathtaking hill station
          renowned for its tea plantations, rolling hills, and pleasant climate. Often
          referred to as the "Kashmir of South India," Munnar is a haven for nature lovers
          and adventure seekers alike.
        </p>
        <p style={styles.description}>
          Munnar's lush green landscape is dotted with tea estates, waterfalls, and exotic
          flora and fauna. Visitors can enjoy trekking, wildlife spotting, and sipping freshly
          brewed tea while soaking in the scenic beauty of the mist-covered hills.
        </p>
        <div style={styles.imageContainer}>
          <img src={munnar1} alt="Munnar 1" style={styles.image} />
          <img src={munnar2} alt="Munnar 2" style={styles.image} />
          <img src={munnar3} alt="Munnar 3" style={styles.image} />
        </div>
        <p style={styles.description}>
          Key attractions in Munnar include:
          <ul style={styles.list}>
            <li><strong>Tea Gardens:</strong> Explore the sprawling tea plantations and visit the Tea Museum to learn about the history and process of tea-making.</li>
            <li><strong>Eravikulam National Park:</strong> Home to the endangered Nilgiri Tahr, this park offers stunning views of the rolling hills and valleys.</li>
            <li><strong>Mattupetty Dam:</strong> A popular picnic spot with opportunities for boating and enjoying the serene surroundings.</li>
            <li><strong>Attukal Waterfalls:</strong> A picturesque spot ideal for photography and relaxation.</li>
          </ul>
        </p>
        <p style={styles.description}>
          Munnar is also a paradise for adventure enthusiasts, offering trekking routes like
          the Anamudi Peak, the highest in South India. The cool climate, pristine environment,
          and vibrant local culture make Munnar a must-visit destination for all.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#eef7f3",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  title: {
    color: "#2c3e50",
    fontSize: "2.5em",
  },
  content: {
    textAlign: "center",
    color: "#34495e",
  },
  description: {
    margin: "10px 0",
    fontSize: "1.2em",
    lineHeight: "1.6",
    textAlign: "justify",
  },
  list: {
    textAlign: "left",
    margin: "10px auto",
    maxWidth: "800px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "20px",
    flexWrap: "wrap",
  },
  image: {
    width: "300px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default Munnar;
