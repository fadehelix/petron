import React from 'react';
import { MainNavigation as Navigation } from './components/MainNavigation';

import {
  Container,
  Box,
  Card,
  CardContent,
  CardHeader,
} from '@material-ui/core';
import { LineChart } from './components/charts';
import { TableDataAPI, SimpleTable } from './components/SimpleTable';

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
              <CardHeader title="Net Income in all stations for last week" />
              <CardContent>
                <LineChart
                  dataSource={'http://localhost:3001/dailyIncomeByStation'}
                />
              </CardContent>
            </Card>
          </Box>
        </Container>
        <Container maxWidth="sm">
          <Box py="2">
            <Card>
              <CardHeader title="Petrol stations" />
              <CardContent>
                <TableDataAPI
                  dataSource="http://localhost:3001/stations"
                  tableHeaders={['code', 'city', 'address']}
                  render={(data, tableHeaders) => (
                    <SimpleTable data={data} tableHeaders={tableHeaders} />
                  )}
                />
              </CardContent>
            </Card>
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default App;
