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
  containerHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  containerWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
};
ChartLoader.defaultProps = {
  containerWidth: '100%',
};

export default ChartLoader;
