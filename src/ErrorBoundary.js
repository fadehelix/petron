import React from 'react';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.warn(errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <Alert severity="error">Something went wrong.</Alert>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  errorMessage: PropTypes.string,
};
ErrorBoundary.defaultProps = {
  errorMessage: 'Something went wrong',
};

export default ErrorBoundary;
