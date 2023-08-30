import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/star-players">Star Players</NavLink></li>
          <li><NavLink to="/team">Team</NavLink></li>
          <li><NavLink to="/news">News</NavLink></li>
        </ul>
      </nav>
      <h1>Welcome to all things New York Giants - Giants Wire</h1>
    </header>
  );
}

export default Header;
