import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EnterPage from './Enter-Page/EnterPage';
import App from './App';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={EnterPage} />
        <Route path="/app" component={App} />
      </Switch>
    </Router>
  );
}

export default Routes;
