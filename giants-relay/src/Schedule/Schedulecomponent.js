import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      <p>Here is the roster for the 2023-2024 NFL Season:</p>
      <ul>
        {teamData.roster && teamData.roster.map((player, index) => (
          <li key={index}>
            <p>Name: {player.longName}</p>
            <p>Position: {player.pos}</p>
            <p>Jersey Number: {player.jerseyNum}</p>
            <p>Age: {player.age}</p>
            <p>Height: {player.height}</p>
            <p>Weight: {player.weight} lbs</p>
            <p>School: {player.school}</p>
            <p>Experience: {player.exp} years</p>
            <p> <img src={player.espnHeadshot} alt="Player Headshot" /></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamComponent;
