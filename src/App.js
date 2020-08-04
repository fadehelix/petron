import React from 'react';
import { MainNavigation as Navigation } from './components/MainNavigation';

import './App.scss';
import {
  Container,
  Box,
  Card,
  CardContent,
  CardHeader,
} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Container maxWidth="lg">
          <Box py={2}>
            <Card>
              <CardHeader title="Test Chart" />
              <CardContent></CardContent>
            </Card>
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default App;
