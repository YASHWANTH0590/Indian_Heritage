import React from "react";

// Importing images
import BharatanatyamImage from '../Images/bharatanatyam.jpg';
import KathakImage from '../Images/kathak.jpg';
import KuchipudiImage from "../Images/kuchipudi.jpg";
import OdissiImage from '../Images/odissi.jpg';
import KathakaliImage from '../Images/kathakali.jpg';
import SattriyaImage from '../Images/sattriya.jpg';
import ManipuriImage from "../Images/manipuri.jpg";

const App = () => {
  const dances = [
    {
      title: "Bharatanatyam",
      image: BharatanatyamImage,
      description:
        "Bharatanatyam is a classical Indian dance form originating from Tamil Nadu. Known for its fixed upper torso and intricate footwork, it narrates stories through expressions and gestures.",
    },
    {
      title: "Kathak",
      image: KathakImage,
      description:
        "Kathak originated in northern India and is characterized by rhythmic footwork, spins, and storytelling through dance. It was heavily influenced by Mughal culture.",
    },
    {
      title: "Kuchipudi",
      image: KuchipudiImage,
      description:
        "Kuchipudi is a classical dance form from Andhra Pradesh. It combines graceful movements, expressions, and dramatic storytelling, often incorporating religious themes.",
    },
    {
      title: "Odissi",
      image: OdissiImage,
      description:
        "Odissi hails from Odisha and is one of the oldest classical dance forms in India. It is known for its fluid movements and strong emphasis on tribhangi (three-body bends).",
    },
    {
      title: "Kathakali",
      image: KathakaliImage,
      description:
        "Kathakali is a traditional dance-drama form from Kerala. It features elaborate costumes, face painting, and storytelling through dance and music.",
    },
    {
      title: "Sattriya",
      image: SattriyaImage,
      description:
        "Sattriya, originating in Assam, is a dance form that integrates storytelling with devotional themes. It is a blend of classical and folk traditions.",
    },
    {
      title: "Manipuri",
      image: ManipuriImage,
      description:
        "Manipuri comes from Manipur and is known for its lyrical and graceful movements. It often narrates stories from the life of Krishna and Radha.",
    },
  ];

  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
          }
          .navbar {
            background-color: #333;
            padding: 10px;
            text-align: center;
          }
          .navbar a {
            color: white;
            text-decoration: none;
            font-size: 18px;
          }
          .card-section {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
          }
.card {
  background: white;
  border: 2px solid #000; /* Added black border */
  border-radius: 8px;
  margin: 15px;
  width: 250px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2); /* Increased intensity of shadow */
  transition: transform 0.2s;
}

          .card:hover {
            transform: scale(1.05);
          }
          .card-content {
            padding: 15px;
            text-align: center;
          }
          .card-image {
            width: 100%;
            height: 180px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            object-fit: cover;
          }
          .card-paragraph {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin: 10px 0 5px;
          }
          .card-description {
            font-size: 14px;
            color: #555;
            margin: 10px 0;
            text-align: justify;
          }
          .card-button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
          }
          .card-button:hover {
            background-color: #0056b3;
        }
        `}
      </style>
      <div className="card-section">
        {dances.map((dance, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <img className="card-image" src={dance.image} alt={dance.title} />
              <p className="card-paragraph">
                <strong>{dance.title}</strong>
              </p>
              <p className="card-description">{dance.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
