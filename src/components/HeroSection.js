import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Welcome to XYZ Cricket Tournaments</h2>
        <p>Explore the thrill of cricket tournaments in various formats</p>
        <button>View Upcoming Matches</button>
      </div>
    </section>
  );
};

export default HeroSection;
