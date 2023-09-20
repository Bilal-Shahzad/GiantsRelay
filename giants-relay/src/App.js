import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Body from './Body/Body';
import TeamPage from './Team/TeamComponent';
import NewsPage from './News/NewsComponent';
import Footer from './Footer/footer';
import ScheduleComponent from './Schedule/Schedulecomponent';
import EnterPage from './Enter-Page/EnterPage';
import WeekRecap from './News/Recap/WeekRecap'; 
import Week1Recap from './News/Recap/week1';
import Week2Recap from './News/Recap/week2';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<EnterPage />} />
          <Route path="body" element={<Body />} />
          <Route path="schedule" element={<ScheduleComponent />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="recap/*" element={<WeekRecap />} />
          <Route path="recap/week1" element={<Week1Recap />} />
          <Route path="recap/week2" element={<Week2Recap />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
