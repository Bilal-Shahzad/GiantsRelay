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
import Week3Recap from './News/Recap/week3';
import Week4Recap from './News/Recap/week4';
import Week5Recap from './News/Recap/week5';
import Week6Recap from './News/Recap/week6';
import Week7Recap from './News/Recap/week7';
import Week8Recap from './News/Recap/week8';
import Week9Recap from './News/Recap/week9';
import Week10Recap from './News/Recap/week10';
import Week11Recap from './News/Recap/week11';
import Week12Recap from './News/Recap/week12';
import Week14Recap from './News/Recap/week14'
import Week15Recap from './News/Recap/week15'
import Week16Recap from './News/Recap/week16';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<EnterPage />} />
          <Route path="Body" element={<Body />} />
          <Route path="schedule" element={<ScheduleComponent />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="recap/*" element={<WeekRecap />} />
          <Route path="recap/week1" element={<Week1Recap />} />
          <Route path="recap/week2" element={<Week2Recap />} />
          <Route path="recap/week3" element={<Week3Recap />} />
          <Route path="recap/week4" element={<Week4Recap />} />
          <Route path="recap/week5" element={<Week5Recap />} />
          <Route path="recap/week6" element={<Week6Recap />} />
          <Route path="recap/week7" element={<Week7Recap />} />
          <Route path="recap/week8" element={<Week8Recap />} />
          <Route path="recap/week9" element={<Week9Recap />} />
          <Route path="recap/week10" element={<Week10Recap />} />
          <Route path="recap/week11" element={<Week11Recap />} />
          <Route path="recap/week12" element={<Week12Recap />} />
          <Route path="recap/week14" element={<Week14Recap />} />
          <Route path="recap/week15" element={<Week15Recap />} />
          <Route path="recap/week16" element={<Week16Recap />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
