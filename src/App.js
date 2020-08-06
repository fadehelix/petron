import React from 'react';
import { MainNavigation as Navigation } from './components/MainNavigation';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard, Station } from './components/pages';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navigation />
        </header>
        <main>
          <Switch>
            <Route path="/station/1">
              <Station />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
