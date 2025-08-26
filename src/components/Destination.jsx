import React from "react";
import "./Destination.css";
import BlurText from "./BlurText";

import Image1 from "../assets/America.png";
import Image2 from "../assets/Egypt.png";
import Image3 from "../assets/SouthAfrica.png";
import Image4 from "../assets/Spain.png";
import Image5 from "../assets/Uruguay.png";
import Image6 from "../assets/Brazil.png";
import Image7 from "../assets/Guatemala.png";
import Image8 from "../assets/SouthKorea.png";
import Image9 from "../assets/Bhutan.png";
import Image10 from "../assets/Tanzania.png";
import Image11 from "../assets/Nicaragua.png";
import Image12 from "../assets/Algeria.png";

const destinations = [
  { img: Image1, name: "America" },
  { img: Image2, name: "Egypt" },
  { img: Image3, name: "South Africa" },
  { img: Image4, name: "Spain" },
  { img: Image5, name: "Uruguay" },
  { img: Image6, name: "Brazil" },
  { img: Image7, name: "Guatemala" },
  { img: Image8, name: "South Korea" },
  { img: Image9, name: "Bhutan" },
  { img: Image10, name: "Tanzania" },
  { img: Image11, name: "Nicaragua" },
  { img: Image12, name: "Algeria" },
];

function Destination() {
  return (
    <>
      <div className="destination-heading-container">
        <h1 className="heading-destination">
          <BlurText
            text="Destinations"
            delay={200}
            animateBy="letters"
            direction="top"
            stepDuration={0.35}
            className="blur-text"
          />
        </h1>
      </div>

      <div className="destinations-grid">
        {destinations.map((d, i) => (
          <div key={i} className="destination-card">
            <img src={d.img} alt={d.name} className="destination-img" />
            <p className="destination-name">{d.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Destination;
