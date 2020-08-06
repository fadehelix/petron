import React from 'react';
import { Container, Box, Card, CardHeader } from '@material-ui/core';

const Station = ({ stationData }) => {
  return (
    <>
      <Container maxWidth="lg">
        <Box py={2}>
          <CardHeader title="Station 1" />
          <Card></Card>
        </Box>
      </Container>
    </>
  );
};

export default Station;
