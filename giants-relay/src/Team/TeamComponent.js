import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TeamComponent() {
  const [rosterData, setRosterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeamRoster',
          params: {
            teamID: '6',
            teamAbv: 'NYG',
            getStats: 'true'
          },
          headers: {
            'X-RapidAPI-Key': process.env.TANK_API_KEY,
            'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
          }
        };

        const response = await axios.request(options);
        setRosterData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Team</h2>
      <p>Here is the roster for the 2023-2024 NFL Season:</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {rosterData.map(player => (
            <li key={player.playerID}>
              <strong>Name:</strong> {player.playerName}<br />
              <strong>Position:</strong> {player.playerPosition}<br />
              <strong>Jersey Number:</strong> {player.playerJerseyNumber}<br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TeamComponent;
