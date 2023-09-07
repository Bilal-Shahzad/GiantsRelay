import React from 'react';

function NewsComponent() {
  const schedule = [
    {
      week: 1,
      date: 'Sun, 9/10',
      opponent: 'DAL',
      time: '7:20 PM',
      recap: 'In the first game against the Dallas Cowboys.'
    },
    {
      week: 2,
      date: 'Sun, 9/17',
      opponent: 'ARI',
      time: '3:05 PM',
      recap: 'In a game against the Arizona Cardinals,'
    },
    {
      week: 3,
      date: 'Thu, 9/21',
      opponent: 'SF',
      time: '7:15 PM',
      recap: 'Thursday Night Football featured an exciting matchup against the San Francisco 49ers.'
    },
    {
      week: 4,
      date: 'Mon, 10/2',
      opponent: 'SEA',
      time: '7:15 PM',
      recap: 'Monday Night Football is a showdown against the Seattle Seahawks.'
    },
    {
      week: 5,
      date: 'Sun, 10/8',
      opponent: 'MIA',
      time: '12:00 PM',
      recap: 'Facing the Miami Dolphins on a Sunday afternoon,'
    },
    {
      week: 6,
      date: 'Sun, 10/15',
      opponent: 'BUF',
      time: '7:20 PM',
      recap: 'Sunday Night Football featured a marquee matchup against the Buffalo Bills.'
    },
    {
      week: 7,
      date: 'Sun, 10/22',
      opponent: 'WSH',
      time: '12:00 PM',
      recap: 'In a Sunday afternoon clash with the Washington Commanders,'
    },
    {
      week: 8,
      date: 'Sun, 10/29',
      opponent: 'NYJ',
      time: '12:00 PM',
      recap: 'A Sunday matchup against the New York Jets '
    },
    {
      week: 9,
      date: 'Sun, 11/5',
      opponent: 'LV',
      time: '3:25 PM',
      recap: 'In a Sunday showdown with the Las Vegas Raiders,'
    },
    {
      week: 10,
      date: 'Sun, 11/12',
      opponent: 'DAL',
      time: '3:25 PM',
      recap: 'A rematch with the Dallas Cowboys'
    },
    {
      week: 11,
      date: 'Sun, 11/19',
      opponent: 'WSH',
      time: '12:00 PM',
      recap: 'Facing the Washington Commanders for the second time this season,'
    },
    {
      week: 12,
      date: 'Sun, 11/26',
      opponent: 'NE',
      time: '12:00 PM',
      recap: 'In a Sunday matchup with the New England Patriots,'
    },
    {
      week: 14,
      date: 'Mon, 12/11',
      opponent: 'GB',
      time: '7:15 PM',
      recap: 'Monday Night Football brought a highly anticipated matchup against the Green Bay Packers.'
    },
    {
      week: 15,
      date: 'Sun, 12/17',
      opponent: 'NO',
      time: '12:00 PM',
      recap: 'In a Sunday clash with the New Orleans Saints,'
    },
    {
      week: 16,
      date: 'Mon, 12/25',
      opponent: 'PHI',
      time: '3:30 PM',
      recap: 'Christmas Day featured a matchup against the Philadelphia Eagles.'
    },
    {
      week: 17,
      date: 'Sun, 12/31',
      opponent: 'LAR',
      time: '12:00 PM',
      recap: 'In the final game of the regular season, our team faced the Los Angeles Rams,'
    },
    {
      week: 18,
      date: 'Sun, 1/7',
      opponent: 'PHI',
      time: 'TBD',
      recap: 'In the season finale, our team faced a good challenge in the form of the Philadelphia Eagles.'
    },
  ];

  return (
    <div>
      <h2>News</h2>
      <div className="game-schedule">
        {schedule.map((game, index) => (
          <div key={index} className="game">
            <h3>Week {game.week} - {game.date}</h3>
            <p>Opponent: {game.opponent}</p>
            <p>Time: {game.time}</p>
            <p>Recap: {game.recap}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsComponent;
