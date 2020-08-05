import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

const ChartLoader = ({
  containerHeight,
  containerWidth,
  color = 'primary',
}) => {
  return (
    <div
      style={{
        height: containerHeight,
        width: containerWidth,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress color={color} />
    </div>
  );
};

ChartLoader.propTypes = {
  containerHeight: PropTypes.number.isRequired,
  containerWidth: PropTypes.number.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
};

export default ChartLoader;
