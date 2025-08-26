import React from "react";
import "./intro.css";
import Introimage from "../assets/intro-img.png";

function Intro() {
  return (
    <div className="intro">
      {/* Left side: text */}
      <div className="text-section">
        <h1 className="heading-intro">Wherever you wish to go</h1>
        <p className="paragraph-intro">
          At Flybeyond, we believe travel is more than just visiting places—it’s
          about creating unforgettable stories. From breathtaking mountains to
          vibrant cities, we curate journeys that blend comfort, adventure, and
          culture. Whether you’re seeking a relaxing getaway, a thrilling
          expedition, or a personalized tour, Flybeyond is your trusted partner
          in exploring the world. Let’s turn your travel dreams into reality—one
          trip at a time.
        </p>
      </div>

      {/* Right side: image */}
      <div className="image-section">
        <img className="intro-img" src={Introimage} alt="Intro" />
      </div>
    </div>
  );
}
export default Intro;
