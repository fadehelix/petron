import React from 'react';
import {
  Container,
  Box,
  Card,
  CardContent,
  CardHeader,
} from '@material-ui/core';
import { LineChart } from '../../charts';
import { SimpleTable, TableDataAPI } from '../../SimpleTable';
import './Dashboard.scss';
import ErrorBoundary from '../../../ErrorBoundary';

const Dashboard = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box py={2}>
          <Card>
            <CardHeader title="Net Income in all stations for last week" />
            <CardContent>
              <ErrorBoundary>
                <LineChart
                  dataSource={'http://localhost:3002/dailyIncomeByStation'}
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
                  dataSource="http://localhost:3002/stations"
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
