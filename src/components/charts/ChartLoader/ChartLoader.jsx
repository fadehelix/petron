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
        width: '100%',
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
ChartLoader.defaultProps = {
  containerWidth: '100%',
};

export default ChartLoader;
