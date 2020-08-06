import React, { useState } from 'react';
import { MainNavigation as Navigation } from './components/MainNavigation';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard, Station } from './components/pages';

import StationContext from './contexts/StationContext';

const station = {
  station: {},
  setStation: (station) => {},
};

function App() {
  const [context, setContext] = useState({});

  return (
    <div className="App">
      <StationContext.Provider value={[context, setContext]}>
        <Router>
          <header>
            <Navigation />
          </header>
          <main>
            <Switch>
              <Route path="/station/:id">
                <Station />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </main>
        </Router>
      </StationContext.Provider>
    </div>
  );
}

export default App;
