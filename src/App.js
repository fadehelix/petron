import React, { useEffect, useState } from 'react';
import { MainNavigation as Navigation } from './components/MainNavigation';

import './App.scss';
import {
  Container,
  Box,
  Card,
  CardContent,
  CardHeader,
} from '@material-ui/core';
import { LineChart } from './components/charts/LineChart';

import useFetch from 'react-fetch-hook';

const helperDateRange = [
  '01.07',
  '02.07',
  '03.07',
  '04.07',
  '05.07',
  '06.07',
  '07.07',
];

const mapDataToChart = (data) => {
  return [
    {
      //day
      //income in 1  station
      //income in 2  station
      //income in 3  station
      //amt
    },
  ];
};

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
      </main>
    </div>
  );
}

export default App;
