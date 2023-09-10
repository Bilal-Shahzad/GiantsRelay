import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ScheduleComponent() {
  const [schedule, setSchedule] = useState([]);
  const apiKey = process.env.REACT_APP_TANK_API_KEY;

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeamSchedule',
      params: {
        teamAbv: 'NYG',
        season: '2023',
      },
      headers: {
        'X-RapidAPI-Key': 'c5a06ca78emshb28580c191d09a0p19816fjsnf8f65962ecf1',
        'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com',
      },
    };

    async function fetchSchedule() {
      try {
        const response = await axios.request(options);
        setSchedule(response.data.body.schedule);
        console.log("data:", response.data.body[schedule] );
      } catch (error) {
        console.error(error);
      }
    }

    fetchSchedule();
  }, [apiKey]);

  return (
    <div>
      <h2>Here Is The Schedule For the 2023 Season</h2>
      <ul>
        {schedule.map((game, index) => (
          <li key={index}>
            <p>Date: {game.gameWeek}</p>
            <p>Home Team: {game.home}</p>
            <p>Home Result: {game.homeResult}</p>
            <p>Away Team: {game.away}</p>
            <p>Away Result: {game.awayResult}</p>
            <p>Home Team Points: {game.homePts}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}



// Other code...


//   const [apiData, setApiData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const apiKey = process.env.REACT_APP_API_KEY;
//       console.log("API Key:", apiKey);

//       const options = {
//         method: 'GET',
//         url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeamSchedule',
//         params: {
//           teamAbv: 'NYG',
//           season: '2023'
//         },
//         headers: {
//           'X-RapidAPI-Key': apiKey,
//           'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await axios.request(options);
//         setApiData(response.data);
//       } catch (error) {
//         if (error.response && error.response.status === 401) {
//           console.error('Unauthorized: Please check your API key.');
//         } else if (error.response && error.response.status === 429) {
//           console.error('Too Many Requests: Implement rate limiting.');
//         } else {
//           console.error('An error occurred:', error.message);
//         }
//         setApiData({});
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Here Is The Schedule For the 2023 Season</h2>

//       {apiData && apiData.schedule ? (
//         <div>
//           <ul>
//             {apiData.schedule.map((game, index) => (
//               <li key={index}>
//                 Game Date: {game.date}<br />
//                 Home Team: {game.homeTeam}<br />
//                 Away Team: {game.awayTeam}<br />
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// }

export default ScheduleComponent;

