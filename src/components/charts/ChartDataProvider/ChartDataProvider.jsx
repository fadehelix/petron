import React from 'react';
import PropTypes from 'prop-types';
import useFetch from 'react-fetch-hook';
import { Button } from '@material-ui/core';
import createTrigger from 'react-use-trigger';
import useTrigger from 'react-use-trigger/useTrigger';

import { ChartLoader } from '..';
import { ErrorMessage } from '../../ErrorMessage';

const requestTrigger = createTrigger();

const ChartDataApi = ({ dataSource, render }) => {
  const requestTriggerValue = useTrigger(requestTrigger);

  const { isLoading, data, error } = useFetch(dataSource, {
    depends: [requestTriggerValue],
  });

  if (error) {
    return (
      <ErrorMessage>
        Cannot receive data :({' '}
        <Button onClick={() => requestTrigger()}>Try again</Button>
      </ErrorMessage>
    );
  }
  return (
    <>{isLoading ? <ChartLoader containerHeight={300} /> : render(data)}</>
  );
};

ChartDataApi.propTypes = {
  dataSource: PropTypes.string.isRequired,
  render: PropTypes.func,
};

export { ChartDataApi };
