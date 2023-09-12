import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TeamComponent.css'

function TeamComponent() {
  const [teamData, setTeamData] = useState({});
  const apiKey = process.env.REACT_APP_TANK_API_KEY;

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeamRoster',
      params: {
        teamAbv: 'NYG',
        getStats: 'true',
      },
      headers: {
        'X-RapidAPI-Key': 'c5a06ca78emshb28580c191d09a0p19816fjsnf8f65962ecf1',
        'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com',
      },
    };

    async function fetchTeamData() {
      try {
        const response = await axios.request(options);
        setTeamData(response.data.body);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTeamData();
  }, [apiKey]);

  return (
    <div>
      <h2>Team: {teamData.team}</h2>
      <p>Here is the New York Giants roster for the 2023-2024 NFL Season:</p>
      <ul className="player-list">
      {teamData.roster && teamData.roster.map((player, index) => (
      <li key={index} className="player-item">
      <p className="player-detail"><strong>Name:</strong> {player.longName}</p>
      <p className="player-detail"><strong>Position:</strong> {player.pos}</p>
      <p className="player-detail"><strong>Jersey Number:</strong> {player.jerseyNum}</p>
      <p className="player-detail"><strong>Age:</strong> {player.age}</p>
      <p className="player-detail"><strong>Height:</strong> {player.height}</p>
      <p className="player-detail"><strong>Weight:</strong> {player.weight} lbs</p>
      <p className="player-detail"><strong>School:</strong> {player.school}</p>
      <p className="player-detail"><strong>Experience:</strong> {player.exp} years</p>
      <p className="player-detail"><strong></strong> <img src={player.espnHeadshot} alt="Player Headshot" /></p>
    </li>
  ))}
</ul>
    </div>
  );
}

export default TeamComponent;
