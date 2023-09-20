import React from 'react';
import './News.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import week1 from './Recap/WeekRecap';

// create a title
function NewsComponent() {
  const schedule = [
    {
      week: 1,
      date: 'Sun, 9/10',
      opponent: 'DAL',
      time: '7:20 PM',
    },
    {
      week: 2,
      date: 'Sun, 9/17',
      opponent: 'ARI',
      time: '3:05 PM',
    },
    {
      week: 3,
      date: 'Thu, 9/21',
      opponent: 'SF',
      time: '7:15 PM',
    },
    {
      week: 4,
      date: 'Mon, 10/2',
      opponent: 'SEA',
      time: '7:15 PM',
    },
    {
      week: 5,
      date: 'Sun, 10/8',
      opponent: 'MIA',
      time: '12:00 PM',
    },
    {
      week: 6,
      date: 'Sun, 10/15',
      opponent: 'BUF',
      time: '7:20 PM',
    },
    {
      week: 7,
      date: 'Sun, 10/22',
      opponent: 'WSH',
      time: '12:00 PM',
    },
    {
      week: 8,
      date: 'Sun, 10/29',
      opponent: 'NYJ',
      time: '12:00 PM',
    },
    {
      week: 9,
      date: 'Sun, 11/5',
      opponent: 'LV',
      time: '3:25 PM',
    },
    {
      week: 10,
      date: 'Sun, 11/12',
      opponent: 'DAL',
      time: '3:25 PM',
    },
    {
      week: 11,
      date: 'Sun, 11/19',
      opponent: 'WSH',
      time: '12:00 PM',
    },
    {
      week: 12,
      date: 'Sun, 11/26',
      opponent: 'NE',
      time: '12:00 PM',
    },
    {
      week: 14,
      date: 'Mon, 12/11',
      opponent: 'GB',
      time: '7:15 PM',
    },
    {
      week: 15,
      date: 'Sun, 12/17',
      opponent: 'NO',
      time: '12:00 PM',
    },
    {
      week: 16,
      date: 'Mon, 12/25',
      opponent: 'PHI',
      time: '3:30 PM',
    },
    {
      week: 17,
      date: 'Sun, 12/31',
      opponent: 'LAR',
      time: '12:00 PM',
    },
    {
      week: 18,
      date: 'Sun, 1/7',
      opponent: 'PHI',
      time: 'TBD',
    },
  ];

  return (
    <div className="news-container">
      <h2 className="recaps-heading">Recaps</h2>
      <div className="game-schedule">
        {schedule.map((game, index) => (
          <div key={index} className="game-card">
            <h3 className="game-week">Week {game.week} - {game.date}</h3>
            <p className="opponent-info">Opponent: {game.opponent}</p>
            <Link to={`/recap/week${game.week}`}>Recap</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsComponent;
