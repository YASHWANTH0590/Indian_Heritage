import React from "react";

const ModernIndia = () => {
  const achievements = [
    {
      title: "Space Exploration",
      description: "India's ISRO has achieved milestones like Chandrayaan and Mangalyaan.",
    },
    {
      title: "Digital Revolution",
      description: "India is a global leader in IT services and digital payment systems like UPI.",
    },
    {
      title: "Economic Growth",
      description: "India is the world's 5th largest economy with thriving industries.",
    },
  ];

  const culturalHighlights = [
    "Unity in Diversity",
    "Global Yoga Movement",
    "Bollywood and Indian Cuisine",
    "Technology and Startups",
  ];

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      margin: "0",
      padding: "0",
      backgroundColor: "#f4f4f9",
      color: "#333",
    },
    header: {
      backgroundColor: "#6200ea",
      color: "#fff",
      textAlign: "center",
      padding: "20px",
    },
    headerTitle: {
      fontSize: "2.5em",
      marginBottom: "10px",
    },
    headerSubtitle: {
      fontSize: "1.2em",
    },
    section: {
      margin: "20px auto",
      padding: "20px",
      maxWidth: "1200px",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    sectionTitle: {
      color: "#6200ea",
      marginBottom: "15px",
    },
    cards: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "space-around",
    },
    card: {
      background: "#f4f4f9",
      border: "1px solid #ddd",
      borderRadius: "10px",
      width: "300px",
      padding: "15px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    cardTitle: {
      color: "#333",
      marginBottom: "10px",
    },
    cardDescription: {
      fontSize: "1em",
      lineHeight: "1.6",
    },
    list: {
      listStyle: "circle",
      marginLeft: "20px",
    },
    listItem: {
      margin: "10px 0",
    },
    footer: {
      textAlign: "center",
      padding: "10px",
      background: "#333",
      color: "#fff",
    },
  };

  return (
    <div style={styles.container}>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Achievements</h2>
        <div style={styles.cards}>
          {achievements.map((item, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Cultural Highlights</h2>
        <ul style={styles.list}>
          {culturalHighlights.map((highlight, index) => (
            <li key={index} style={styles.listItem}>
              {highlight}
            </li>
          ))}
        </ul>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2024 Indian Heritage & Culture</p>
      </footer>
    </div>
  );
};

export default ModernIndia;
