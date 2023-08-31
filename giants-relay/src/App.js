import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Body from './Body/Body';
import StarPlayersPage from './Schedule/StarPlayersComponent';
import TeamPage from './Team/TeamComponent';
import NewsPage from './News/NewsComponent';
import Footer from './Footer/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/star-players" element={<StarPlayersPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
