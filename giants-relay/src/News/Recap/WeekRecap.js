import React from 'react';

function WeekRecap({ match }) {
  const weekNumber = match.params.weekNumber;

  const recapContent = `Recap for Week ${weekNumber}`;

  return (
    <div>
      <h2>Week {weekNumber} Recap</h2>
      <p>{recapContent}</p>
    </div>
  );
}

export default WeekRecap;
