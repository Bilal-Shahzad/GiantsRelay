import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

function Header() {
  return (
    <header>
      <nav>
        <ul>
          {/* Use the Link component to create navigation links */}
          <li><Link to="/star-players">Star Players</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/news">News</Link></li>
        </ul>
      </nav>
      <h1>Welcome to all things New York Giants - Giants Wire</h1>
    </header>
  );
}

export default Header;
