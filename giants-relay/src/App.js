import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'; 
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {/* Define your routes and corresponding components */}
          <Route path="/star-players" component={StarPlayersComponent} />
          <Route path="/team" component={TeamComponent} />
          <Route path="/news" component={NewsComponent} />
          <Route path="/" exact component={Body} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
