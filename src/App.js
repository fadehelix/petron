import React from 'react';
import { MainNavigation as Navigation } from './components/MainNavigation';

import './App.scss';
import { Button, Container, Box } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Container maxWidth="lg">
          <Box my={2}>
            <Button variant="contained" color="default">
              test button
            </Button>
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default App;
