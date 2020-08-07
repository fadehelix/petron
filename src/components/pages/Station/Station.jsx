import React, { useContext, useEffect } from 'react';
import {
  Container,
  Box,
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core';

import { useParams } from 'react-router-dom';
import Context from '../../../contexts/StationContext';

const Station = ({ stationData }) => {
  const [context, setContext] = useContext(Context);
  const stationId = useParams().id;

  return (
    <>
      <Container maxWidth="lg">
        <Box py={2}>
          <Card>
            <CardHeader title={`Station ${context.code}`} />
            <CardContent>
              {`Station Address: ${context.address}, ${context.city}`}
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Station;
