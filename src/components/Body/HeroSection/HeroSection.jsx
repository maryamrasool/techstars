import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <div className="techstars-startup-weekend">
        <h1>Techstars Startup Weekend</h1>
        <p>
          Startup Weekend is a three-day program where aspiring entrepreneurs
          can experience startup life. In hundreds of cities around the world.
        </p>
      </div>
      <div className="hero-section-stats-grid">
        <div className="grid-item" id="programsHeld">
          <h2>7K+</h2>
          <h5>Programs Held</h5>
        </div>
        <div className="grid-item" id="countries">
          <h2>150+</h2>
          <h5>Countries</h5>
        </div>
        <div className="grid-item" id="communityLeaders">
          <h2>19K+</h2>
          <h5>Community Leaders</h5>
        </div>
        <div className="grid-item" id="totalParticipants">
          <h2>428K+</h2>
          <h5>Total Participants</h5>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
