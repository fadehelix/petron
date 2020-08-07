import React from 'react';
import {
  Container,
  Box,
  Card,
  CardContent,
  CardHeader,
} from '@material-ui/core';
import { LineChart, ChartDataApi } from '../../charts';
import { SimpleTable, TableDataAPI } from '../../SimpleTable';
import ErrorBoundary from '../../../ErrorBoundary';

import './Dashboard.scss';

const Dashboard = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box py={2}>
          <Card>
            <CardHeader title="Net Income in all stations for last week" />
            <CardContent>
              <ErrorBoundary>
                <ChartDataApi
                  dataSource={'http://localhost:3001/dailyIncomeByStation'}
                  render={(data) => <LineChart data={data} />}
                />
              </ErrorBoundary>
            </CardContent>
          </Card>
        </Box>
      </Container>
      <Container maxWidth="sm">
        <Box py="2">
          <Card>
            <CardHeader title="Petrol stations" />
            <CardContent>
              <ErrorBoundary erroMessage="Something went wrong">
                <TableDataAPI
                  dataSource="http://localhost:3001/stations"
                  tableHeaders={['id', 'code', 'city', 'address']}
                  render={(data, tableHeaders) => (
                    <SimpleTable
                      data={data}
                      tableHeaders={tableHeaders}
                      className="AllStationsTable"
                    />
                  )}
                />
              </ErrorBoundary>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
