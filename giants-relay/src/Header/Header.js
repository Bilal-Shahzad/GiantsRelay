import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'; // Import Outlet

function Header() {
  return (
    <><header>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/star-players">Schedule</NavLink></li>
          <li><NavLink to="/team">Team</NavLink></li>
          <li><NavLink to="/news">News</NavLink></li>
        </ul>
      </nav>
      <h1>Welcome to all things New York Giants - Giants Wire</h1>
    </header><Outlet /></> 
  );
}

export default Header;
