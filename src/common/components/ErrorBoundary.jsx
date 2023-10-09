import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { InfoPages } from 'common/components';

const fallbackRender = ({ error }, parentPath) => {
  return (
    <InfoPages.ReactErrorBoundary data={error} redirectTo={parentPath} />
  );
};

const ErrorBoundary = ({ children, parentPath }) => {
  return (
    <ReactErrorBoundary
      fallbackRender={(data) => fallbackRender(data, parentPath)}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
