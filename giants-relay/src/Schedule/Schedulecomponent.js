import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ScheduleComponent() {
  const [teamInfo, setTeamInfo] = useState(null);

  useEffect(() => {
    const fetchTeamInfo = async () => {
      const options = {
        method: 'GET',
        url: 'https://sportspage-feeds.p.rapidapi.com/teams',
        params: {
          league: 'NFL',
          division: 'NFC EAST',
          conference: 'NFC'
        },
        headers: {
            'X-RapidAPI-Key': 'c5a06ca78emshb28580c191d09a0p19816fjsnf8f65962ecf1',
            'X-RapidAPI-Host': 'sportspage-feeds.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        if (response.data.results && response.data.results.length > 0) {
          setTeamInfo(response.data.results[17]); 
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeamInfo();
  }, []);

  return (
    <div>
      <h2>Team Schedule</h2>
      {teamInfo ? (
        <div>
          <p>Team: {teamInfo.team}</p>
          <p>Mascot: {teamInfo.mascot}</p>
          <p>Location: {teamInfo.location}</p>
          <p>Conference: {teamInfo.conference}</p>
          <p>Division: {teamInfo.division}</p>
          <p>League: {teamInfo.league}</p>
          <p>Abbreviation: {teamInfo.abbreviation}</p>
        </div>
      ) : (
        <p>Loading team information...</p>
      )}
    </div>
  );
}

export default ScheduleComponent;
