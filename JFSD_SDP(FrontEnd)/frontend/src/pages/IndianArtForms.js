import React from 'react';

const IndianArtForms = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      margin: '20px',
      padding: '20px',
      backgroundColor: '#f9f4ef',
      border: '1px solid #ddd',
      borderRadius: '10px',
    },
    title: {
      fontSize: '2.5em',
      color: '#4b2e83',
      marginBottom: '10px',
      textAlign: 'center',
    },
    intro: {
      fontSize: '1.2em',
      color: '#333',
      marginBottom: '20px',
      textAlign: 'justify',
    },
    list: {
      listStyle: 'none',
      padding: '0',
    },
    listItem: {
      marginBottom: '15px',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      backgroundColor: '#fff',
    },
    artName: {
      fontSize: '1.5em',
      color: '#a54f3c',
    },
    description: {
      fontSize: '1em',
      color: '#555',
      textAlign: 'justify',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Indian Art Forms</h1>
      <p style={styles.intro}>
        India is a land of diverse and rich cultural heritage, reflected beautifully in its art forms.
        Here are some notable Indian art forms that showcase the country's vibrant traditions and history.
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <h2 style={styles.artName}>Madhubani Art</h2>
          <p style={styles.description}>
            Originating from Bihar, Madhubani art is known for its intricate patterns and use of natural dyes.
          </p>
        </li>
        <li style={styles.listItem}>
          <h2 style={styles.artName}>Tanjore Paintings</h2>
          <p style={styles.description}>
            A classical South Indian painting style that features rich colors, surface richness, and compact composition.
          </p>
        </li>
        <li style={styles.listItem}>
          <h2 style={styles.artName}>Warli Art</h2>
          <p style={styles.description}>
            A tribal art form from Maharashtra, Warli art is characterized by its simple and earthy representation of life.
          </p>
        </li>
        <li style={styles.listItem}>
          <h2 style={styles.artName}>Pattachitra</h2>
          <p style={styles.description}>
            A traditional painting style from Odisha, Pattachitra is celebrated for its intricate designs and mythological themes.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default IndianArtForms;
