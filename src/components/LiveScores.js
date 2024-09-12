import React, { useState, useEffect,Link } from 'react';
import '../styles/LiveScores.css';


function LiveScores() {
  const [matches, setMatches] = useState([]);

  // Fetch data from the API on component mount
  useEffect(() => {
    fetch('https://api.cricapi.com/v1/matches?apikey=7426b5ce-f0b9-4073-b4f6-f878c12a97aa&offset=0')
      .then((response) => response.json())
      .then((data) => {
        setMatches(data.data); // set the 'data' array from API response
      })
      .catch((error) => console.error('Error fetching matches:', error));
  }, []);

  return (
    <div className="live-scores">
      {matches.length > 0 ? (
        matches.map((match, index) => (
          <div key={index} className="match">
            <h4>{match.name}</h4>
            <p><strong>Status:</strong> {match.status}</p>
            <p><strong>Type:</strong> {match.matchType}</p>
            <p><strong>Venue:</strong> {match.venue}</p>
            <p><strong>Date:</strong> {new Date(match.dateTimeGMT).toLocaleDateString()}</p>
            
            <div className="score-section">
              {match.score && match.score.length > 0 ? (
                match.score.map((inning, i) => (
                  <div key={i} className="inning">
                    <p><strong>{inning.inning}</strong></p>
                    <p>Runs: {inning.r} / Wickets: {inning.w}</p>
                    <p>Overs: {inning.o}</p>
                  </div>
                ))
              ) : (
                <p>No score available.</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>Loading matches...</p>
      )}
    </div>
  );
}

export default LiveScores;
