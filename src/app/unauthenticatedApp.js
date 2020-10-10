import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routesList from "routes/routesList";
import { FullPageSpinner } from "components/loaders.js";

const UnauthenticatedApp = () => {
  const publicRoutes = routesList.filter(route => !route.isPrivate);

  return (
    <Router>
      <Suspense fallback={<FullPageSpinner />}>
        <Switch>
          {publicRoutes.map(({ component, ...rest }, index) => (
            <Route component={component} {...rest} key={`auth-route-${index}`} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default UnauthenticatedApp;
