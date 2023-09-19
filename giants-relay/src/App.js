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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<EnterPage />}>
          <Route path="Body" element={<Body />} />
          </Route>
          <Route path="/enter" element={<EnterPage />} />
          <Route path="/schedule" element={<ScheduleComponent />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
