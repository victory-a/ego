import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ProtectedRoute from "routes/ProtectedRoute";
import routesList from "routes/routesList";
import { FullPageSpinner } from "components/loaders.js";

const AuthenticatedApp = () => {
  const privateRoutes = routesList.filter(route => route.isPrivate);

  return (
    <Router>
      <Suspense fallback={<FullPageSpinner />}>
        <Switch>
          {privateRoutes.map(({ component, ...rest }, index) => (
            <ProtectedRoute component={component} {...rest} key={`authenticated-route-${index}`} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AuthenticatedApp;
