import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ScheduleComponent() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      console.log("API Key:", apiKey);

      const options = {
        method: 'GET',
        url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeamSchedule',
        params: {
          teamAbv: 'NYG',
          season: '2023'
        },
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setApiData(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error('Unauthorized: Please check your API key.');
        } else if (error.response && error.response.status === 429) {
          console.error('Too Many Requests: Implement rate limiting.');
        } else {
          console.error('An error occurred:', error.message);
        }
        setApiData({});
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Here Is The Schedule For the 2023 Season</h2>

      {apiData && apiData.schedule ? (
        <div>
          <ul>
            {apiData.schedule.map((game, index) => (
              <li key={index}>
                Game Date: {game.date}<br />
                Home Team: {game.homeTeam}<br />
                Away Team: {game.awayTeam}<br />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default ScheduleComponent;
