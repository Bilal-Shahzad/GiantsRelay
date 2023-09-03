import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Body from './Body/Body';
import TeamPage from './Team/TeamComponent';
import NewsPage from './News/NewsComponent';
import Footer from './Footer/footer';
import ScheduleComponent from './Schedule/Schedulecomponent'; 


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/schedule" element={<ScheduleComponent />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/schedule" element={<ScheduleComponent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
