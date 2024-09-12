import React from 'react';
import '../styles/Tournaments.css';

function Tournaments() {
  const tournaments = [
    {
      name: "XYZ Test Series",
      format: "Test Cricket",
      description:
        "XYZ Test Series is an annual tournament that spans multiple weeks, with teams competing in the traditional long format of the game. The tournament tests endurance and skill over five-day matches.",
    },
    {
      name: "XYZ T20 Cup",
      format: "T20 Cricket",
      description:
        "The XYZ T20 Cup is a fast-paced and thrilling tournament, attracting some of the best international and domestic teams. The matches are limited to 20 overs per side, making every run and wicket crucial.",
    },
    {
      name: "XYZ One-Day Championship",
      format: "One-Day International (ODI)",
      description:
        "This tournament focuses on the 50-over format, bringing together teams from across the globe for intense competition. The XYZ ODI Championship is a celebration of strategy, skill, and sportsmanship.",
    },
    {
      name: "XYZ Local League",
      format: "Domestic Cricket",
      description:
        "The XYZ Local League is a platform for emerging cricketers to showcase their talent. Teams from various cities and regions compete in this exciting tournament format, fostering the next generation of cricket stars.",
    },
  ];

  return (
    <div className="tournaments-container">
      <h2>Our Cricket Tournaments</h2>
      <p>We conduct cricket tournaments in various formats. Here's an overview of some of our key tournaments:</p>
      <div className="tournaments-list">
        {tournaments.map((tournament, index) => (
          <div key={index} className="tournament-card">
            <h3>{tournament.name}</h3>
            <p><strong>Format:</strong> {tournament.format}</p>
            <p>{tournament.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tournaments;
