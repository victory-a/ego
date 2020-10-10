import React from "react";
import { Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallback from "../components/errorBoundary";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      <ErrorBoundary fallbackComponent={ErrorBoundaryFallback}>
        <Component />
      </ErrorBoundary>
    </Route>
  );
};

export default ProtectedRoute;
