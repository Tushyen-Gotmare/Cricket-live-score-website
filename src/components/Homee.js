import React from 'react';
import '../styles/Home.css';


function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
      <div className="hero-content">
          <h1>Welcome to XYZ Cricket Organization</h1>
          <p>Join us in celebrating the spirit of cricket with tournaments, live scores, and more.</p>
          <a href="/tournaments" className="cta-button">Explore Tournaments</a>
        </div>

      </section>
      
      {/* Feature Cards Section */}
      <section className="features-section">
      
        <div className="feature-card">
          <h2>Tournaments</h2>
          <p>We conduct various cricket tournaments in different formats, including T20, ODI, and Test Cricket.</p>
          <a href="/tournaments">Learn More</a>
        </div>
        <div className="feature-card">
          <h2>Live Scores</h2>
          <p>Stay up-to-date with live scores and commentary from all our matches.</p>
          <a href="/matches">View Live Scores</a>
        </div>
        <div className="feature-card">
          <h2>About Us</h2>
          <p>Learn more about our organization and our mission to promote cricket at all levels.</p>
          <a href="#about">Discover More</a>
        </div>
      </section>
    </div>
   
  );
}

export default Home;
