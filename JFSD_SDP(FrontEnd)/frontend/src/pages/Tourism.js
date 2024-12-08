  // src/pages/Tourism.js
  import React from 'react';
  import './tourism.css'; // Importing the CSS file for styling
  import tajMahal from '../Images/taj_mahal.jpg'; // Local import for Taj Mahal image
  import jaipur from'../Images/Jaipur.jpg';
  import goldentemple from '../Images/GoldenTemple.jpg';
  import lehladakh from '../Images/Leh-Ladakh.jpg';
  import manali from '../Images/Manali.jpg';
  import reshikesh from '../Images/Reshikesh.jpg';
  import jaisalmer from '../Images/Jaisalmer.jpg';
  import gaya from '../Images/Gaya.jpg';
  import kerala from '../Images/Kerala.jpg';
  import munnar from '../Images/Munnar.jpg';
  import ooty from '../Images/Ooty.jpg';
  import wayanad from '../Images/Wayanad.jpg';
  
  const Tourism = () => {
    const tourismPlaces = [
      {
        name: "Taj Mahal, Agra",
        description: "An epitome of love and one of the Seven Wonders of the World, the Taj Mahal is a stunning marble mausoleum.",
        location: "Agra, Uttar Pradesh",
        photo: tajMahal, // Using imported image
        link: "https://maps.app.goo.gl/mYYAk6LDcfAfPg5k7",
        button: (
          <button onClick={() => window.location.href = "/tajmahal"}>
            Discover more
          </button>
        )
      },
      
      {
        name: "Jaipur, Rajasthan",
        description: "Known as the Pink City, Jaipur offers royal palaces, vibrant bazaars, and a glimpse into Rajasthan's rich culture.",
        location: "Jaipur, Rajasthan",
        photo: jaipur,
        link: "https://maps.app.goo.gl/3fTjhscXtLJkP4tp6",
        button: (
          <button onClick={() => window.location.href = "jaipur"}>
            Discover more
          </button>
        )
      },
      {
        name: "Golden Temple, Amritsar",
        description: "A spiritual haven, the Golden Temple is the holiest site for Sikhs and is renowned for its golden architecture.",
        location: "Amritsar, Punjab",
        photo: goldentemple,
        link: "https://maps.app.goo.gl/XgT73MadFVT6ZzQS6",
        button: (
          <button onClick={() => window.location.href = "goldentemple"}>
            Discover more
          </button>
        )
      },
      {
        name:"Leh-Ladakh",
        description:"Renowned for its monasteries, Pangong Lake, and Nubra Valley",
        location:"Jammu and Kashmir",
        photo: lehladakh,
        link:"https://maps.app.goo.gl/X8EK135kjVuxpMTu8",
        button: (
          <button onClick={() => window.location.href = "lehladakh"}>
            Discover more
          </button>
        )

      },
      {
        name:"Manali",
        description:"Known for its scenic beauty, Solang Valley, and adventure sports",
        location:" Himachal Pradesh",
        photo: manali,
        link:"https://maps.app.goo.gl/b9vgCGYv2xynBHNe8",
        button: (
          <button onClick={() => window.location.href = "Manali"}>
            Discover more
          </button>
        )

      },
      {
        name:"Rishikesh and Haridwar  ",
        description:"Renowned spiritual hubs by the Ganges",
        location:"Uttarakhand",
        photo: reshikesh,
        link:"https://maps.app.goo.gl/5mHWf5T1fZYRmnMV8",
        button: (
          <button onClick={() => window.location.href = "Reshikesh"}>
            Discover more
          </button>
        )

      },
      {
        name:"Jaisalmer",
        description:"Famous for its Golden Fort and sand dunes",
        location:"Rajasthan",
        photo: jaisalmer,
        link:"https://maps.app.goo.gl/sXfahEh8jEXFkorD8",
        button: (
          <button onClick={() => window.location.href = "Jaisalmer"}>
            Discover more
          </button>
        )

      },
      {
        name:"Bodh Gaya",
        description:"A UNESCO World Heritage Site, famous for Mahabodhi Temple",
        location:"Bihar",
        photo: gaya,
        link:"https://maps.app.goo.gl/nD826iRsD3yabNnh7",
        button: (
          <button onClick={() => window.location.href = "Gaya"}>
            Discover more
          </button>
        )

      },
      {
        name:"Backwaters",
        description:"A tranquil network of lagoons and lakes, ideal for houseboat cruises and serene getaways",
        location:"Alleppey, Kerla",
        photo: kerala,
        link:"https://maps.app.goo.gl/YHe9zzgJSWCDBw4t8",
        button: (
          <button onClick={() => window.location.href = "Backwater"}>
            Discover more
          </button>
        )

      },
      {
        name:"Munnar",
        description:"Known for its lush tea plantations, cool climate, and picturesque landscapes",
        location:"Kerala",
        photo: munnar,
        link:"https://maps.app.goo.gl/MjAn8FZWRF45FuyM8",
        button: (
          <button onClick={() => window.location.href = "Munnar"}>
            Discover more
          </button>
        )

      },
      {
        name:"Ooty(Tamil nadu)",
        description:"The 'Queen of Hill Stations' with beautiful gardens, lakes, and colonial charm",
        location:"Tamil nadu",
        photo: ooty,
        link:"https://maps.app.goo.gl/BcKyVGaMGfTXNRzW6",
        button: (
          <button onClick={() => window.location.href = "tajmahal.html"}>
            Discover more
          </button>
        )

      },
      {
        name:"Wayanad (Kerala)",
        description:"A perfect blend of wildlife, waterfalls, and trekking trails",
        location:"Kerala",
        photo: wayanad,
        link:"https://maps.app.goo.gl/TMGmFW2DopMyKewc6",
        button: (
          <button onClick={() => window.location.href = "tajmahal.html"}>
            Discover more
          </button>
        )

      },
      // Other places remain unchanged...
    ];

    return (
      <div>
        <h1 className="head">Explore the Wonders of Indian Tourism!</h1>

        {/* Tourism Places Section */}
        <div className="places-section">
  {tourismPlaces.map((place, index) => (
    <div key={index} className="place-card">
      <img src={place.photo} alt={place.name} className="place-photo" />
      <div className="place-content">
        <h2 className="place-name">{place.name}</h2>
        <p className="place-description">{place.description}</p>
        <p className="place-location">📍 {place.location}</p>
        <a href={place.link} target="_blank" rel="noopener noreferrer">
          <button className="place-button">View Location</button>
        </a>
        {/* Conditionally render the "Discover More" button */}
        {place.button && (
          <div className="custom-button-container">
            {place.button}
          </div>
        )}
      </div>
    </div>
  ))}
</div>


      </div>
    );
  };

  export default Tourism;
