import React from "react";
import backwater1 from "../Images/backwater1.jpg";
import backwater2 from "../Images/backwater2.jpg";
import backwater3 from "../Images/backwater3.jpg";

const KeralaBackwater = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Explore the Serene Kerala Backwaters</h1>
      </header>
      <section style={styles.content}>
        <p style={styles.description}>
          The Kerala Backwaters are a network of interconnected canals, rivers, lakes, 
          and inlets, forming an enchanting ecosystem. Renowned for its natural beauty, 
          houseboats, and serene environment, it offers a tranquil escape for travelers. 
          Experience the mesmerizing views, lush greenery, and vibrant local culture.
        </p>
        <p style={styles.description}>
          Stretching across various districts, the backwaters play a vital role in the 
          state’s ecosystem and livelihood. The Vembanad Lake, the longest in India, 
          and the Ashtamudi Lake, known as the gateway to the backwaters, are major 
          attractions. These pristine water bodies are fringed by coconut trees, 
          quaint villages, and rice paddies, making them a photographer's paradise.
        </p>
        <p style={styles.description}>
          Traditional Kerala houseboats, known as *kettuvallams*, provide a unique way 
          to explore these waterways. These boats were historically used to transport 
          rice and spices but are now beautifully renovated with all modern amenities 
          for a luxurious and peaceful stay. Glide through the serene waters, watching 
          the daily life of locals unfold along the banks, and enjoy the breathtaking 
          sunsets over the lagoons.
        </p>
        <div style={styles.imageContainer}>
          <img src={backwater1} alt="Kerala Backwaters 1" style={styles.image} />
          <img src={backwater2} alt="Kerala Backwaters 2" style={styles.image} />
          <img src={backwater3} alt="Kerala Backwaters 3" style={styles.image} />
        </div>
        <p style={styles.description}>
          The Kerala Backwaters are also home to unique flora and fauna. The region's 
          biodiversity includes water birds like kingfishers and cormorants, and it is 
          a haven for those seeking a peaceful connection with nature. Several villages 
          on the banks showcase the traditional lifestyle of Kerala, offering visitors 
          insights into fishing, coir-making, and toddy tapping.
        </p>
        <p style={styles.description}>
          Notable destinations include:
          <ul style={styles.list}>
            <li><strong>Alleppey (Alappuzha):</strong> Known as the "Venice of the East," Alleppey is famous for its houseboat cruises and the annual Nehru Trophy Boat Race.</li>
            <li><strong>Kumarakom:</strong> A cluster of small islands on Vembanad Lake, Kumarakom offers bird sanctuaries, lush greenery, and tranquil houseboat stays.</li>
            <li><strong>Kollam:</strong> A historic trade hub, Kollam is known for its Ashtamudi Lake and mesmerizing backwater tours.</li>
            <li><strong>Kochi:</strong> Combining history and nature, Kochi offers a mix of cultural experiences along with serene backwaters.</li>
          </ul>
        </p>
        <p style={styles.description}>
          The best time to visit the backwaters is during the cooler months from October 
          to February. Whether you're seeking relaxation, adventure, or cultural exploration, 
          the Kerala Backwaters promise an unforgettable experience.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f9f9f9",
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

export default KeralaBackwater;
